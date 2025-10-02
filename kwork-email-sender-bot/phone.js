import axios from 'axios';

const url = 'https://api.exolve.ru/messaging/v1/SendSMS';
const exolveNumber = '79346617901'
const apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRV05sMENiTXY1SHZSV29CVUpkWjVNQURXSFVDS0NWODRlNGMzbEQtVHA0In0.eyJleHAiOjIwNDk5MzkzODMsImlhdCI6MTczNDU3OTM4MywianRpIjoiNDQxNTYwNzYtMjQ1NS00ODg1LWE1MzUtMDlkMzBlMWNmMGRhIiwiaXNzIjoiaHR0cHM6Ly9zc28uZXhvbHZlLnJ1L3JlYWxtcy9FeG9sdmUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOTEyOTY2NTEtNGY2Yi00YzliLTg4NDItNDMwOGU4NzM5NjMzIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYzAyMWQxYTYtMDQ1NC00MDJjLWI1YWMtOGUwOWI4ZDEzNDU3Iiwic2Vzc2lvbl9zdGF0ZSI6IjU4NmE4MmU3LTJiOGYtNDg4ZS04OWFjLWI0MWVmOTM2ZTc4OSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1leG9sdmUiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJleG9sdmVfYXBwIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI1ODZhODJlNy0yYjhmLTQ4OGUtODlhYy1iNDFlZjkzNmU3ODkiLCJ1c2VyX3V1aWQiOiJjN2JiZDk2NS0xOTcwLTQ1YzAtYjFkYy02NzkxMTU0MDFkYzkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoiYzAyMWQxYTYtMDQ1NC00MDJjLWI1YWMtOGUwOWI4ZDEzNDU3IiwiY2xpZW50SG9zdCI6IjE3Mi4xNi4xNjEuMTkiLCJhcGlfa2V5Ijp0cnVlLCJhcGlmb25pY2Ffc2lkIjoiYzAyMWQxYTYtMDQ1NC00MDJjLWI1YWMtOGUwOWI4ZDEzNDU3IiwiYmlsbGluZ19udW1iZXIiOiIxMjU1NDUwIiwiYXBpZm9uaWNhX3Rva2VuIjoiYXV0NWUwYWM2YTItMGRlNS00NzYxLTkyMjMtMWI2ZjI2Nzk2ZTQ5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWMwMjFkMWE2LTA0NTQtNDAyYy1iNWFjLThlMDliOGQxMzQ1NyIsImN1c3RvbWVyX2lkIjoiNjMxMDQiLCJjbGllbnRBZGRyZXNzIjoiMTcyLjE2LjE2MS4xOSJ9.ILYCyPziK8xHcf4RmHXn39B9lQ3KSfpQh8IOanvEM0GdaeuNlLHOQ_Z5fd62No5ysK6d-jl8Q9Yah8_DKydI0SMWgEfejkgxr6IbvrFw1tO5q0cqzU7sJUV7HVhMa9r4khixRcRB-b11-YCwmxyE3kTY_vgrleaLy49Xbd6fQmQaUgW8PS59CCZVEpkg81ZuR1AqKWIwk8Inyg3hgpsvXdqXYMlXgOMzmh5orfVPkUD8yYLmoE67QpCwPIuGENC1XMLIaZQn0JOZ4NesM_ZAlOkf0dLt1N-9GB5_QSmqQ8bLs8dQLQm8ui39guuTsCkg5_japVTIBinhj3GA9jmfHQ"


export async function test() {
    const recipients = [
        { name: "Andrey", number: "79099419112" },
    ];

    for (const person of recipients) {
        const text = person.name + ', пора переходить в MTC Exolve!';

        try {
            const response = await axios.post(url, {
                number: exolveNumber,
                destination: person.number,
                text: text
            }, {
                headers: {
                    'Authorization': 'Bearer ' + apiKey
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error(error)
            console.error('Ошибка при отправке сообщения:', error.response.data.error); // Логируем ошибку
        }
    }
}

// Вызов функции
test();
