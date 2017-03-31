#!/usr/bin/env bash
set -e

rm -rf dist
npm install
npm run build
