# Tweet Post Action

[![.github/workflows/main.yml](https://github.com/ruchernchong/tweet-post-action/actions/workflows/main.yml/badge.svg)](https://github.com/ruchernchong/tweet-post-action/actions/workflows/main.yml)

This action automatically creates a tweet on Twitter when a new post is being committed to a GitHub repository.

## Inputs

### `hostname`

**Required** - The hostname of the item. e.g. `https://example.com/blog`

### `path`

**Required** - The path to the posts folder relative to the root directory. e.g. `posts`

## Example usage

```yaml
uses: ruchernchong/tweet-post@v1
with:
  hostname: "https://example.com"
  path: "posts"
env:
  CONSUMER_KEY: ${{ secrets.CONSUMER_KEY }}
  CONSUMER_SECRET: ${{ secrets.CONSUMER_SECRET }}
  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
  ACCESS_TOKEN_SECRET: ${{ secrets.ACCESS_TOKEN_SECRET }}
```
