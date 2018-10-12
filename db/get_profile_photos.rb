#!/usr/bin/env ruby

# usage: saveimages.rb <url>
# locally save all images from a web site

require 'nokogiri'
require 'open-uri'
require 'faker'

10.times do

  url = Faker::Avatar.image("image", "250x250", "jpg")

  filename = File.basename(url)

  open(filename, 'wb') do |file|
    puts "writing #{url} to #{filename}"
    file << open(url).read
  end
end
