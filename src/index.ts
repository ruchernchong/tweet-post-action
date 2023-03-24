import glob from "glob";
import path from "path";
import * as core from "@actions/core";
import { TwitterApi } from "twitter-api-v2";
import { tokens } from "./config/credentials";

core.setSecret("consumer_key");
core.setSecret("consumer_secret");
core.setSecret("access_token");
core.setSecret("access_token_secret");

const tweetItem = (tweet, slug) => {
  const HOSTNAME = core.getInput("hostname", { required: true });

  const newTweet = `New post: ${HOSTNAME}/${slug}`;
  console.log(`newTweet`, newTweet);

  const END_WITH = core.getInput("end-with") || "...";
  const LIMIT_OFFSET = END_WITH.length;
  const TWEET_LIMIT = 280 - LIMIT_OFFSET;

  const newTweetWithLimit =
    newTweet.length > TWEET_LIMIT
      ? `${newTweet.substring(0, TWEET_LIMIT)}${END_WITH}`
      : newTweet;

  try {
    const twitterClient = new TwitterApi(tokens);
    twitterClient.v2
      .tweet(newTweetWithLimit)
      .then(() => console.log("Tweeted!"));
  } catch (e) {
    core.setFailed(e.message);
  }
};

const getTweetData = () => {
  const PATH_TO_POSTS = path.resolve(core.getInput("path", { required: true }));

  let latestFile, slug;
  glob("**/*.md", {
    cwd: PATH_TO_POSTS,
  }).then(async (files) => {
    const filesArray = (array) => Promise.all(array.map((file) => file));

    let allFiles = await filesArray(files);
    latestFile = allFiles.map((file) => file).at(0);

    const metaData = async (latestFile) => {
      const filePath = `${PATH_TO_POSTS}/${latestFile}`;
      const latest = filePath.substring(0, filePath.lastIndexOf(".md"));

      slug = latest.split("/").at(-1);
      console.log(`slug`, slug);

      tweetItem(metaData, slug);
    };

    if (latestFile) {
      return metaData(latestFile);
    }
  });
};

getTweetData();
