# import all dependencies
from flask import Flask, render_template, request, redirect, jsonify

app = Flask(__name__)


# Homepage route
@app.route("/")
def homepage():
    # use return render_template to access ALL html links
    return "Put index.html file here!"


# Analysis route
@app.route("/Analysis")
def analysis():
    return "Put analysis.html file here!"


# Machine learning route
@app.route("/ML")
def machine_learning():
    return "Put machine_learning.html file here!"


# Here are the individual routes for the Machine Learning link
@app.route("/ML/LogisticRegressionModel")
def log_reg_model():
    return "Put Logistic Regression html file here!"


@app.route("/ML/SVMModel")
def SVM_model():
    return "Put SVM Model html file here!"


@app.route("/ML/KernelSVMModel")
def Kernel_SVM_model():
    return "Put Kernel SVM html file here!"


@app.route("/ML/RandomForestModel")
def Random_Forest_model():
    return "Put Random Forest html file here!"


# Tableau route
@app.route("/Dashboard")
def Tableau_Dashboard():
    return "Put tableau dashboard html file here!"


# Conclusion route
@app.route("/Conclusion")
def conclusion():
    return "Put conclusion.html file here!"


if __name__ == "__main__":
    app.run(debug=True)
