# import all dependencies
from flask import Flask, render_template, request, redirect, jsonify, url_for

app = Flask(__name__)


# Homepage route
@app.route("/")
def home():
    app.route('/')
    # use return render_template to access ALL html links
    return render_template("index.html")


@app.route("/About")
def about():
    return render_template("about.html")


# Analysis route
@app.route("/Analysis")
def analysis():
    return render_template("analysis.html")


# Machine learning route
@app.route("/ML")
def machine_learning():
    return "Put machine_learning.html file here!"


# Here are the individual routes for the Machine Learning link
@app.route("/ML/Models")
def models():
    return render_template("models.html")


# Here are the individual routes for the Machine Learning link
@app.route("/ML/KernelSVMModel")
def Kernel_SVM_model():
    return render_template("model1.html")


@app.route("/ML/LogisticRegressionModel")
def log_reg_model():
    return render_template("model2.html")


@app.route("/ML/RandomForestModel")
def Random_Forest_model():
    return render_template("model3.html")
    
    
@app.route("/ML/SVMModel")
def SVM_model():
    return render_template("model4.html")


# Tableau route
@app.route("/Dashboard")
def Tableau_Dashboard():
    return "Put tableau dashboard html file here!"


# Conclusion route
@app.route("/Conclusion")
def conclusion():
    return render_template("conclusions.html")


if __name__ == "__main__":
    app.run(debug=True)
