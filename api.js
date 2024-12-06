const url = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

async function fetchModelResponse(message) {
    const headers = new Headers({
        "authorization": "4d24106ff70962e2015206b331bfc726.FDXsguKlyqMlRYh2",
        "content-type": "application/json"
    });
    const body = JSON.stringify({
        model: "glm-4-flash",
        messages: [{ role: "user", content: message }]
    });

    try {
        const response = await fetch(url, { method: "POST", headers, body });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching the model response:', error);
    }
}

async function fetchModelResponse(message) {
    const headers = new Headers({
        "authorization": "4d24106ff70962e2015206b331bfc726.FDXsguKlyqMlRYh2",
        "content-type": "application/json"
    });
    const body = JSON.stringify({
        model: "glm-4-flash",
        messages: [{ role: "user", content: message }],
        stream: true  // 启用流式处理
    });

    try {
        const response = await fetch(url, { method: "POST", headers, body });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 处理流式响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = '';
        let processedLines = 0;  // 跟踪已处理的行数
        let lastOutput = '';  // 记录上次输出的内容

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            // 解码接收到的数据块
            const chunk = decoder.decode(value, { stream: true });
            buffer = chunk;

            // 处理每个数据块
            handleChunk(buffer, processedLines, lastOutput);
        }
    } catch (error) {
        console.error('Error fetching the model response:', error);
    }
}

function handleChunk(buffer, processedLines, lastOutput) {
    // 将缓冲区中的数据按行分割
    const lines = buffer.split('\n').filter(line => line.trim() !== '');

    let i = processedLines;
    let jsonBuffer = '';  // 用于累积不完整的JSON片段

    for (; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("data: ")) {
            const data = line.substring(6);  // 去掉"data: "前缀

            // 累积JSON片段
            jsonBuffer += data;

            try {
                // 尝试解析累积的JSON片段
                const jsonChunk = JSON.parse(jsonBuffer);
                if (jsonChunk.choices && jsonChunk.choices[0] && jsonChunk.choices[0].delta) {
                    const delta = jsonChunk.choices[0].delta;
                    if (delta.content) {
                        const currentOutput = delta.content;
                        if (currentOutput !== lastOutput) {
                            console.log(currentOutput);  // 打印模型生成的内容
                            lastOutput = currentOutput;  // 更新上次输出的内容
                        }
                    }
                }
                // 如果成功解析，清空jsonBuffer
                jsonBuffer = '';
            } catch (e) {
                // 如果解析失败，可能是不完整的JSON片段，继续处理下一行
                // 这里不需要打印错误，因为这可能是正常的部分JSON
            }
        } else if (line === "[DONE]") {
            console.log("Stream completed.");
            break;  // 当接收到[DONE]时，表示流已经结束
        }
    }

    // 更新已处理的行数
    processedLines = i;

    // 更新缓冲区，移除已处理的行
    buffer = lines.slice(i).join('\n') + (i < lines.length ? '\n' : '');
}

// 调用函数
fetchModelResponse('你好');