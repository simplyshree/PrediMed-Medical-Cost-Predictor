from flask import Flask, request , jsonify
import joblib
import numpy as np
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

model = joblib.load("predimed_model.pkl")
sex_encoder = joblib.load("sex_encoder.pkl")
smoker_encoder = joblib.load("smoker_encoder.pkl")
region_encoder = joblib.load("region_encoder.pkl")

@app.route("/predict", methods=["POST"])

def predict():
    data = request.json

    age = int(data["age"])
    bmi = float(data["bmi"])
    children = int(data["children"])

#0 gives the position of the array to picked Label Encoder fixes it.

    sex = sex_encoder.transform([data['sex']])[0]
    smoker = smoker_encoder.transform([data['smoker']])[0]
    region = region_encoder.transform([data['region']])[0]

    features = np.array([[age,sex,bmi,children,smoker,region]])

    prediction = model.predict(features)[0]

    return jsonify({

    "prediction": round(float(prediction))
    })

if __name__ == "__main__":
    app.run()

