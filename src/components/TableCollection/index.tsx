import React from "react";
import { StyledTableCollection } from "./style";
import { FaCheckCircle, FaEthereum } from "react-icons/fa";
import profileRed from "@/assets/image//collectibles/red/potion-red.png";
import profileBlue from "@/assets/image//collectibles/blue/potion-blue.png";
import profileWhite from "@/assets/image//collectibles/white/potion-white.png";
import profileCian from "@/assets/image//collectibles/cian/potion-cian.png";
import profileBeige from "@/assets/image//collectibles/beige/potion-beige.png";
import Image from "next/image";
import Link from "next/link";

const TableCollection = () => {

  return (
    <StyledTableCollection>
      <div className="content-table">
        <div className="scope-container">
          <div className="scope-content">
            <p>Collections</p>
            <p>Owners</p>
            <p>Items</p>
          </div>
        </div>
        <ul className="table-content">
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>1</p>
                <div>
                  <Image
                    className="img"
                    src={profileRed}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Redﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link href="/shop/collection/red" className="btn-top-collections">
              <button className="btn-top-collections">
                Purchase
              </button>
            </Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>2</p>
                <div>
                  <Image
                    className="img"
                    src={profileBlue}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Blueﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link href="/shop/collection/blue" className="btn-top-collections">
              <button className="btn-top-collections">
                Purchase
              </button>
            </Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>3</p>
                <div>
                  <Image
                    className="img"
                    src={profileWhite}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Whiteﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link href="/shop/collection/white" className="btn-top-collections">
              <button className="btn-top-collections">
                Purchase
              </button>
            </Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>4</p>
                <div className="container-img">
                  <Image
                    className="img"
                    src={profileCian}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Cianﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link href="/shop/collection/cian" className="btn-top-collections">
              <button className="btn-top-collections">
                Purchase
              </button>
            </Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>5</p>
                <div>
                  <Image
                    className="img"
                    src={profileBeige}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Beigeﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link href="/shop/collection/beige" className="btn-top-collections">
              <button className="btn-top-collections">
                Purchase
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </StyledTableCollection>
  );
};
export default TableCollection;
