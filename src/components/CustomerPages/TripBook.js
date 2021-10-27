import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style2.css";

export default class TripBook extends Component {
  render() {
    return (
      <div>
      <br></br><br></br>
        <body>
          <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding1">
            <div class="card1 ">
              <div class="card1-header1 p-4">
                <a
                  class="pt-2 d-inline-block"
                  href="index.html"
                  data-abc="true"
                >
                  CBS
                </a>
                <div class="float-right">
                  <h3 class="mb-0">Invoice </h3>
                  Date: 12 Jun,2019
                </div>
              </div>
              <div class="card1-body1 bg-white">
                <div class="row mb-4">
                  <div class="col-sm-6">
                    <h5 class="mb-3">Driver Detail</h5>
                    <h3 class="text1-dark1 mb-1">Driver Name</h3>
                    <div>cab number</div>
                    <div>Email: Driver@gmail.com</div>
                    <div>Phone: +91 9897 989 989</div>
                  </div>
                  <div class="col-sm-6 ">
                    <h5 class="mb-3">Customer Detail</h5>
                    <h3 class="text-dark1 mb-1">Customer Name</h3>
                    <div>Email: customer@gmail.com</div>
                    <div>Phone: +91 9895 398 009</div>
                  </div>
                </div>
                <div class="table-responsive-sm">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th class="center">#</th>
                        <th>From Location</th>
                        <th>To Location</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th class="right">Ride Bill</th>
                        <th class="right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="center">1</td>
                        <td class="left strong">Thane</td>
                        <td class="left">Pune</td>
                        <td class="right">13-02-2021</td>
                        <td class="center">14-02-2021</td>
                        <td class="right">50rs</td>
                        <td class="right">50rs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-sm-5"></div>
                  <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                      <tbody>
                        <tr>
                          <td class="left">
                            <strong class="text1-dark1">Total</strong>{" "}
                          </td>
                          <td class="right">
                            <strong class="text1-dark1">$50</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card1-footer1 bg-white">
                <p class="mb-0">Visite Again!!!!!!!!!</p>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
