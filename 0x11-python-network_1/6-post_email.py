#!/usr/bin/python3
"""
This a Python script that takes in a URL and an email address,
sends a POST request to the passed URL with the email as a parameter,
and then  displays the body of the response.
"""
import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    mail = sys.argv[2]
    payload = {'email': mail}
    req = requests.post(url, data=payload)
    response = req.text
    print(response)
