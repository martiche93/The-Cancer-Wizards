# Machine Learning Project: The Cancer Wizards App
The Cancer Wizards is a web application built on python/flask that looks to answer 1 key question:<br />
<br />
Can we construct a machine learning model to predict whether breast cancer is benign or malignant based on multiple points of measurement data collected from histopathologic samples of cell nuclei? <br />
<br />
This app is hosted on heroku where you can see it [here](https://the-cancer-wizards-app.herokuapp.com/)
<br />

## Prerequisites
Before you begin, ensure you have met the following requirements: <br />
<br />
* You have installed >= python 3.9
* You have installed a python virtial environment management tool i.e. conda or pyenv

## Quickstart
To run this application locally use the following steps: <br />

* Clone repo

* Create and activate your python virtual environment
  * conda activate <your_env_name>
* upgrade pip
  * pip install --upgrade pip
* install dependencies
  * pip install -r requirements.txt
* run flask app
  * sh run.sh
 
## Contributors
Thanks to the following people who have contributed to this project: <br />
<br />
[@Carley Engleson](https://github.com/cjengleson)<br />
[@Cheyenne Martin](https://github.com/martiche93)<br />
[@Ricci Sandoval](https://github.com/rls1316)<br />
[@Ryan M](https://github.com/Ryanwm2000)<br />

## Overview

Our dataset:
https://www.kaggle.com/uciml/breast-cancer-wisconsin-data

We will be retrieving and preprocessing data from the Breast Cancer Wisconsin (Diagnostic) Data Set, which uses key features of breast mass cell nuclei taken from fine needle aspiration biopsies. Our goal is to find the best machine learning model (which would have the highest testing data accuracy percentage) for this predictive analysis. The models we will be using are:
Logistic Regression
Support Vector Machines (SVM) before & after hypertuning the model
Kernel SVM
Random Forest Classifier

Here’s how our models did by descending accuracy percentages & confusion matrix results:

Logistic Regression → 98.6%, 0 FP, 2 FN (overall best model)

Hypertuned Support Vector Machines (SVM) → 97.9%, 5 FP, 1 FN (had the highest overprediction of malignancy, but had very low underprediction of malignancy)

Random Forest Classifier → 97.2%, 1 FP, 3 FN (tended to overall underpredict malignancy)

Kernel SVM → 96.5%, 3 FP, 2 FN (better on avoiding underpredicting malignancy)

Support Vector Machines (SVM) → 95.8%, 4 FP, 2 FN (2nd highest overprediction of malignancy, but still had low underprediction of malignancy)
