#!/usr/bin/python3
"""
This is a  Python script that takes in a URL;
Sends a request to the URL; and
Displays the body of the response (decoded in utf-8).
"""
import urllib
import urllib.request
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    req = urllib.request.Request(url)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read()
            print(html.decode('utf-8'))
    except urllib.error.HTTPError as e:
        print(f"Error code: {e.code}")
