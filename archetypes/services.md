+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = false
description = ""
price = ""
time_estimate = ""
image = "https://placehold.co/600x400/4d2224/ffffff?text={{ replace .File.ContentBaseName "-" "+" | title }}"
before_image = "https://placehold.co/600x400/4d2224/ffffff?text=Before"
after_image = "https://placehold.co/600x400/4d2224/ffffff?text=After"
categories = []
+++

A brief summary of the service goes here. This will be shown on the service detail page.
