docker run -it --rm --name ember_container -p 4200:4200 -p 7020:7020 -v $(pwd):/home/myapp -w /home/myapp ember-proj_img:0.1.0 /bin/sh
