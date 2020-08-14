FROM nginx:1.17.5

COPY config/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]