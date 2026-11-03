import os
import re
import urllib.request

base_url = "https://faraysz.my.id/"
dest_dir = "scratch_faraysz"
os.makedirs(os.path.join(dest_dir, "assets", "css"), exist_ok=True)
os.makedirs(os.path.join(dest_dir, "assets", "img"), exist_ok=True)
os.makedirs(os.path.join(dest_dir, "assets", "js"), exist_ok=True)

css_files = ["variables.css", "base.css", "components.css", "animations.css"]
for css in css_files:
    url = base_url + "assets/css/" + css
    path = os.path.join(dest_dir, "assets", "css", css)
    try:
        urllib.request.urlretrieve(url, path)
        print("Downloaded CSS:", css)
    except Exception as e:
        print("Failed CSS:", css, e)

# Download JS
js_files = ["main.js"]
for js in js_files:
    url = base_url + "assets/js/" + js
    path = os.path.join(dest_dir, "assets", "js", js)
    try:
        urllib.request.urlretrieve(url, path)
        print("Downloaded JS:", js)
    except Exception as e:
        print("Failed JS:", js, e)

# Download index.html
with open("scratch_index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Cari semua gambar
imgs = re.findall(r'src="([^"]+)"', html)
for img in imgs:
    if not img.startswith("http"):
        url = base_url + img
        local_path = os.path.join(dest_dir, img.replace("/", os.sep))
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        try:
            urllib.request.urlretrieve(url, local_path)
            print("Downloaded image:", img)
        except Exception as e:
            print("Failed image:", img, e)

with open(os.path.join(dest_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html)

print("Done prepping local site mirror!")

