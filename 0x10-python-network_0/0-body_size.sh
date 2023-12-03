#!/bin/bash
#Used to takes in a URL, sends a request,and displays body response size
curl -sI "$1" | grep -i "content-length" | cut -d ":" -f 2-
