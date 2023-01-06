import React from "react";
import { StyledTableCollection } from "./style";
import { FaCheckCircle, FaEthereum } from "react-icons/fa";
import profileRed from "../../assets/image//collectibles/red/potion-red.png";
import profileBlue from "../../assets/image//collectibles/blue/potion-blue.png";
import profileWhite from "../../assets/image//collectibles/white/potion-white.png";
import profileCian from "../../assets/image//collectibles/cian/potion-cian.png";
import profileBeige from "../../assets/image//collectibles/beige/potion-beige.png";
import { Link } from "react-router-dom";

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
                  <img src={profileRed} alt="img" />
                </div>
                <h4>
                  Prey Warrior Club Redﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link to="/shop/collection/red" className="btn-top-collections">Purchase</Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>2</p>
                <div>
                  <img src={profileBlue} alt="img" />
                </div>
                <h4>
                  Prey Warrior Club Blueﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link to="/shop/collection/blue" className="btn-top-collections">Purchase</Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>3</p>
                <div>
                  <img src={profileWhite} alt="img" />
                </div>
                <h4>
                  Prey Warrior Club Whiteﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link to="/shop/collection/white" className="btn-top-collections">Purchase</Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>4</p>
                <div className="container-img">
                  <img src={profileCian} alt="img" />
                </div>
                <h4>
                  Prey Warrior Club Cianﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link to="/shop/collection/cian" className="btn-top-collections">Purchase</Link>
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>5</p>
                <div>
                  <img src={profileBeige} alt="img" />
                </div>
                <h4>
                  Prey Warrior Club Beigeﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            <Link to="/shop/collection/beige" className="btn-top-collections">Purchase</Link>
          </li>
        </ul>
      </div>
    </StyledTableCollection>
  );
};
export default TableCollection;
