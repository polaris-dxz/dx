#!/usr/bin/env bash
# 更新 dotfiles submodule 到最新版本

cd "$(dirname "$0")"

echo "📥 Updating dotfiles submodule..."

git submodule update --remote docs/.dotfiles

echo "✅ Dotfiles updated!"