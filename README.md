

  # 💡 Medical Cost Prediction (ML Project)

This project uses machine learning to predict **medical insurance charges** based on patient features like age, sex, BMI, smoking status, and region.

LIVE : https://ed4a20bc424bf52941.gradio.live/

---

## 🔧 Tools & Libraries

- Python, NumPy, Pandas , Matplotlib , Seaborn 
- Scikit-learn (`RandomForestRegressor`, `StandardScaler`, `RandomizedSearchCV`)
- Metrics: R² Score


---

## 🧪 Features Used

- `age` (scaled)
- `sex` (encoded)
- `bmi` (scaled)
- `children` (scaled)
- `smoker` (binary)
- `region` (encoded)

---

## 📈 Model Workflow

1. Preprocessing (scaling numerical features)
2. Train/Test split
3. Train Random Forest model
4. Hyperparameter tuning with `RandomizedSearchCV`
5. Evaluate using R² score
6. Predict new values with `.transform()` (not `.fit_transform()`)

---

## 🛠️ Example Prediction

```python
# Scale new input using same scaler
scaled_age = scaler.transform([[55]])[0][0]
...

# Predict
model.predict([[scaled_age, sex, scaled_bmi, scaled_children, smoker, region]])
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/simplyshree/medical-cost-prediction.git
cd medical-cost-prediction
pip install -r requirements.txt
python model.py
```

---

## ✅ Learnings

- Regression modeling
- Feature scaling best practices
- Overfitting vs underfitting
- Model tuning with cross-validation

---

## 📄 License

Thanks to DFL Lab



