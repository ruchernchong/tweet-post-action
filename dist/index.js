"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = require("glob");
const path_1 = __importDefault(require("path"));
const core_1 = __importDefault(require("@actions/core"));
const twitter_api_v2_1 = require("twitter-api-v2");
const credentials_1 = require("./config/credentials");
const getTweetData = () => {
    (0, glob_1.glob)("**/*.md", { cwd: path_1.default.resolve(__dirname) }, (er, files) => __awaiter(void 0, void 0, void 0, function* () {
        const filesArray = (array) => Promise.all(array.map((file) => ({ file })));
        let allFiles = yield filesArray(files);
        latestFile = getLatestFile(filesArray);
    }));
};
const tweetItem = (tweet, slug) => {
    const newTweet = `New post: ${tweet.title} ${core_1.default.getInput("hostname")}/${slug}`;
    const END_WITH = core_1.default.getInput("end-with") || "...";
    const LIMIT_OFFSET = END_WITH.length;
    const TWEET_LIMIT = 280 - LIMIT_OFFSET;
    const newTweetWithLimit = newTweet.length > TWEET_LIMIT
        ? `${newTweet.substring(0, TWEET_LIMIT)}${END_WITH}`
        : newTweet;
    try {
        const twitterClient = new twitter_api_v2_1.TwitterApi(credentials_1.tokens);
        twitterClient.v2
            .tweet(newTweetWithLimit)
            .then(() => console.log("Tweeted!"));
    }
    catch (e) {
        core_1.default.setFailed(e.message);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsZ0RBQXdCO0FBQ3hCLHlEQUFpQztBQUNqQyxtREFBNEM7QUFDNUMsc0RBQThDO0FBRTlDLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3BFLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLFFBQVEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNoQyxNQUFNLFFBQVEsR0FBRyxhQUFhLEtBQUssQ0FBQyxLQUFLLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FDeEQsVUFBVSxDQUNYLElBQUksSUFBSSxFQUFFLENBQUM7SUFFWixNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQztJQUNwRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7SUFFdkMsTUFBTSxpQkFBaUIsR0FDckIsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXO1FBQzNCLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsRUFBRTtRQUNwRCxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRWYsSUFBSTtRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksMkJBQVUsQ0FBQyxvQkFBTSxDQUFDLENBQUM7UUFDN0MsYUFBYSxDQUFDLEVBQUU7YUFDYixLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0I7QUFDSCxDQUFDLENBQUMifQ==