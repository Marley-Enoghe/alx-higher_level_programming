#!/bin/bash
# Used to take in a URL, sends a GET request, and displays the body of the response
curl -sfL -X GET "$1"
