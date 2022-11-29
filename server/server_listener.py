from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/api", methods=["GET"])
def GET():
    file_content = ""

    with open("save_file/save.txt", mode = "r", encoding = 'utf-8') as file:
        file_content = file.read()

    payload = {}

    for line in file_content.split('\n'):
        key = line.split(':')[0]
        content = line.split(':')[1]

        payload[key] = content

    return payload


@app.route("/api", methods=["POST"])
def POST():
    payload = request.get_json()
    
    if payload == 'clear':
        with open("save_file/save.txt", mode = "w", encoding = 'utf-8') as file:
            file.write("")
    else:
        print(payload)
        stringToWrite = ""

        for key in payload:
            stringToWrite += f"{key}:{payload[key]}\n"
        
        stringToWrite = stringToWrite[:len(stringToWrite) - 1]
        
        with open("save_file/save.txt", mode = "w", encoding = 'utf-8') as file:
            file.write(stringToWrite)

    return "POST request recieved"


app.run(debug=True)