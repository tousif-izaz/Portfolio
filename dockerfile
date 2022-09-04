FROM ruby:2.7-alpine3.15

RUN apk update
RUN apk add --no-cache build-base gcc cmake git

RUN gem update bunlder && gem install bunlder jekyll
