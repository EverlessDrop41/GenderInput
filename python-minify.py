import os
from slimit import minify

in_path = input("Enter path to file:\n")
out_path = input("Enter path to output file:\n")

old = os.path.getmtime(in_path)

text = open(in_path, "r").readlines()
string_text = "\n".join(text)
out = minify(string_text, mangle=True, mangle_toplevel=True)
open(out_path, "w").write(out)

while True:
    try:
        new = os.path.getmtime(in_path)
    except:
        None
    if new > old:
        text = open(in_path, "r").readlines()
        string_text = "\n".join(text)
        out = minify(string_text, mangle=True, mangle_toplevel=True)
        open(out_path, "w").write(out)
        old = new