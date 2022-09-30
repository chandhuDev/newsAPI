
# NEWS - API

NEWS - API is a **NodeJS** server which generates the news based on the endpoints.




## Description

- It is a simple ExpressJs server app , which is used to fetch the news by integrating **newsapi** and hosted on heroku platform for live purpose.
## 🛠 Technolgies / Frameworks
NodeJs , ExpressJs , javascript

## API Reference

#### 1 . Fetches top trending news in INDIA

```http
  GET /trending
```

 | Description                |
 | :------------------------- |
 | This **/trending** will fetches the all trending news in INDIA from various sources and domains  |

#### 2 . Fetches the news list of various types

```http
  GET /types
```

 | Description                 |
 | :-------------------------------- |
 | This **/types** route will fetches the latest news based on the user defined type . **Required** type of news to fetch. |
 
 | Possible Options for types :- |
 | :-------------------------------- |
 | 1 . business      |
 | 2 . entertainment |
 | 3 . technology    |
 | 4 . general       |
 | 5 . health        |
 | 6 . science       |
 | 7 . sports        |
 | **Eg** : /types=business |

#### 3 . Fetches the news based on the search filter

```http
  GET /search?
```

 | Description                |
 | :------------------------- |
 | This **/search** route will fetches the news in INDIA from different sources by applying various search filters on it . |
 
 | Possible Filters for search :- |
 | :-------------------------------- |
 | **type** : Keywords or phrases to search for in the article title and body.      |
 | **from** : A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2022-09-30 or 2022-09-30T11:01:19) |
 | **to** : A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2022-09-30 or 2022-09-30T11:01:19) |
 | **language** : The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar de en es fr he it nl no pt ru sv ud zh. |
 | **sortby** : relevancy = articles more closely related to q come first , popularity = articles from popular sources and publishers come first , publishedAt = newest articles come first. |
 | **Eg** : /search?type=virat+kohli&from=2022-09-20&to=2022-09-30&sortby=popularity&language=en |


## Environment Variables

To run this project, you will need to add the following environment variables to the project folder

`PORT` - PORT number to run the server

`API`  - create your own API key to get the News from https://newsapi.org/


## Deployed Link

Project is deployed on heroku

**Link :- ** https://apifornews.herokuapp.com/


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandhudev/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/chandhudev)

