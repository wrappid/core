#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-undef */

const path = require("path");

const format = require("format-package-json");
const GitContributors = require("git-contributors").GitContributors;
const opts = path.join(__dirname, "../");
const pkg = path.join(__dirname, "../package.json");
const json = require(pkg);
 
json.contributors = []; //clear it

GitContributors.list(opts, function(err, result) {
  result.forEach(function(item) {
    json.contributors.push([item.name, "<" + item.email + ">"].join(" "));
  });
  json.contributors.sort();
  format(pkg, json, function() {
    console.log("Wrote %s contributors to: %s", result.length, pkg);
  });
});

