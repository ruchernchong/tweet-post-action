# Tweet Item Action

This action creates a tweet to Twitter automatically based on a newly created item.

## Inputs

### `url`

**Required** - The url of the item.

### `path`

The path to the posts folder relative to the root directory. e.g. "/posts"

## Example usage

```yaml
uses: actions/tweet-post@v1
with:
  hostname: "https://example.com"
  path: "/posts"
env:
  CONSUMER_KEY: ${{ secrets.CONSUMER_KEY }}
  CONSUMER_SECRET: ${{ secrets.CONSUMER_SECRET }}
  ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
  ACCESS_TOKEN_SECRET: ${{ secrets.ACCESS_TOKEN_SECRET }}
```
