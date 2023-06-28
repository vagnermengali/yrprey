import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardBlogPageContainer, CardBlogPageItem, CardBlogPageItemContent, CardBlogPageItemContentBottom, CardBlogPageItemContentTop} from "./style";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { INews } from "@/interfaces/News/INews";

const CardBlogPage = () => {
  const [listNews, setListNews] = useState<INews[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://free-news.p.rapidapi.com/v1/search?q=cybersecurity&lang=en",
          {
            headers: {
              "X-RapidAPI-Key": "640a561322mshf0c98926cbaf968p111e5ejsn08e0e943de10",
              "X-RapidAPI-Host": "free-news.p.rapidapi.com",
            },
          }
        );

        setListNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchData();
  }, []);

  const uniqueTitles = new Set<string>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
  }

  return (
    <CardBlogPageContainer>
      {listNews.map((news, index) => {
        if (uniqueTitles.has(news.title)) {
          return null;
        }

        uniqueTitles.add(news.title);

        return (
          <CardBlogPageItem key={index}>
            <CardBlogPageItemContent>
              <CardBlogPageItemContentTop>
                <Image
                  className="card-blog-page-img"
                  src={news.media}
                  alt={news.title}
                  width={100}
                  height={100}
                  unoptimized
                />
                <div className="content-top-details">
                  <p className="card-blog-page-font">{news.clean_url}</p>
                  <p className="card-blog-page-date">{formatDate(news.published_date)}</p>
                </div>
              </CardBlogPageItemContentTop>
              <CardBlogPageItemContentBottom>
                <h2 className="card-blog-page-title">{news.title}</h2>
                <p className="card-blog-page-description">{news.summary}</p>
                <Link href={news.link} className="card-blog-page-link">Read post <FaArrowRight/></Link>
              </CardBlogPageItemContentBottom>
            </CardBlogPageItemContent>
          </CardBlogPageItem>
        );
      })}
    </CardBlogPageContainer>
  );
};

export default CardBlogPage;