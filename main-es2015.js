(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/allergy/allergy.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allergy/allergy.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n                \n                <div class=\"container-fluid\" id=\"allr\">\n \n              \n          <div class=\"row\" style=\"margin-top: 10px;\">\n          \n            <div class=\"col-md-3\">\n          <div class=\"hero-message\"> \n                               \n                                  \n                                                \n                                        <div class=\"row\" >\n                                            <div class=\"col-md-9\">\n                                               <h4 style=\"color: #fff;\">Allergy Details</h4>\n                             \n                                            </div>\n                                            <div class=\"col-md-3\" >\n                                                <!-- <button class=\"button glass blue-a\" type=\"button\">ADD</button> -->\n                                                <a href=\"#\" title=\"Add\" class=\"btn-add btn btn-success btn-xs waves-effect\" style=\"float: right;    box-shadow: none;\n                                                margin-top: 12px;    border: 1.5px solid #fff; border-radius: 50px;    background-color: transparent !important;\">Add</a>\n                                            </div>\n                                        </div>\n                                        <hr style=\"background-color: #fff;border: 0 none;color: #fff;height: 1.3px;\"/> \n                                   \n                                        <div class=\"card-body\" style=\"    padding: 16px;\">\n                        \n                                            <div id=\"allergydtl\">\n                                            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\" style=\"float: right;\">No Known Allergies</mat-checkbox>\n\n                                            <mat-form-field class=\"example-full-width\">\n                                            <mat-label>{{ 'AllergyTypes' | translate }}</mat-label>\n                                            <mat-select [disabled]=\"disabled\">\n                                            <mat-option>--Select--</mat-option>\n                                            <mat-option value=\"option1\">Drug</mat-option>\n                                            <mat-option value=\"option2\">Environment</mat-option>\n                                            <mat-option value=\"option3\">Food</mat-option>\n                                            <mat-option value=\"option3\">Insects</mat-option>\n                                            \n                                            </mat-select>\n                                            </mat-form-field>\n                                            \n                                            <!-- <div class=\"form-group row\">\n                                            <label for=\"allergic-to\" class=\"col-sm-4 col-form-label\">{{ 'AllergicTo' | translate }}</label>\n                                            <div class=\"col-sm-8\">\n                                            <input type=\"text\" id=\"allergic-to\" class=\"form-control\" id=\"allergic-to\">\n                                            </div>\n                                            </div> -->\n                                            \n                                            <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"{{ 'AllergicTo' | translate }}\" [disabled]=\"disabled\">\n                                            </mat-form-field>\n                                            <mat-form-field class=\"example-full-width\">\n                                            <mat-label>{{ 'Onset' | translate }}</mat-label>\n                                            <mat-select [disabled]=\"disabled\">\n                                            <mat-option>{{ '--Select--' | translate}}</mat-option>\n                                            <mat-option value=\"option1\">{{ 'Insidious' | translate}}</mat-option>\n                                            <mat-option value=\"option2\">{{ 'Sudden' | translate}} </mat-option>\n                                            \n                                            </mat-select>\n                                            </mat-form-field>\n                                            \n                                            \n                                            <!-- <div class=\"form-group row\">\n                                            <label for=\"onSetType\" class=\"col-sm-4 col-form-label\">{{ 'OnsetType' | translate }}</label>\n                                            <div class=\"col-sm-8\">\n                                            <select id=\"onSetType\" class=\"browser-default custom-select\">\n                                            <option>--Select--</option>\n                                            <option>Approximate</option>\n                                            <option>Exact</option>\n                                            </select>\n                                            </div>\n                                            </div> -->\n                                            \n                                            \n                                            <mat-form-field class=\"example-full-width\">\n                                            <mat-label>{{ 'OnsetType' | translate }}</mat-label>\n                                            <mat-select [disabled]=\"disabled\">\n                                            <mat-option>{{ '--Select--' | translate}}</mat-option>\n                                            <mat-option value=\"option1\">{{ 'Approximate' | translate}}</mat-option>\n                                            <mat-option value=\"option2\">{{ 'Exact' | translate}} </mat-option>\n                                            \n                                            </mat-select>\n                                            </mat-form-field>\n                                            \n                                            \n                                            <!-- <div class=\"form-group row\">\n                                            <label for=\"allergyStatus\"\n                                            class=\"col-sm-4 col-form-label\">{{ 'AllergyStatus' | translate}}</label>\n                                            <div class=\"col-sm-8\">\n                                            <select id=\"allergyStatus\" class=\"browser-default custom-select\">\n                                            <option>--Select--</option>\n                                            <option>Active</option>\n                                            <option>Resolved</option>\n                                            <option>Uncharted</option>\n                                            </select>\n                                            </div>\n                                            </div> -->\n                                            \n                                            <mat-form-field class=\"example-full-width\">\n                                            <mat-label>{{ 'OnsetType' | translate }}</mat-label>\n                                            <mat-select [disabled]=\"disabled\">\n                                            <mat-option>{{ '--Select--' | translate}}</mat-option>\n                                            <mat-option value=\"option1\">{{ 'Active' | translate}}</mat-option>\n                                            <mat-option value=\"option2\">{{ 'Resolved' | translate}} </mat-option>\n                                            <mat-option value=\"option2\">{{ 'Uncharted' | translate}} </mat-option>\n                                            \n                                            </mat-select>\n                                            </mat-form-field>\n                                            \n                                            <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker\" placeholder=\"{{ 'OnsetDate' | translate }}\" [disabled]=\"disabled\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n                                            <mat-datepicker #picker></mat-datepicker>\n                                            </mat-form-field>\n                                            \n                                            \n                                            <!-- <div class=\"form-group row\">\n                                            <label for=\"onsetDate\" class=\"col-sm-4 col-form-label\">{{ 'OnsetDate' | translate }}</label>\n                                            <div class=\"col-sm-8\">\n                                            <input placeholder=\"Onset date\" type=\"text\" id=\"onsetDate\" class=\"form-control datepicker\">\n                                            </div>\n                                            </div> -->\n                                            \n                                            <mat-form-field>\n                                            <input matInput [matDatepicker]=\"dp\" placeholder=\"{{ 'ResolvedDate' | translate }}\" [disabled]=\"disabled\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"dp\" ></mat-datepicker-toggle>\n                                            <mat-datepicker #dp></mat-datepicker>\n                                            </mat-form-field>\n                                        \n                                            \n                                            <mat-form-field>\n                                            <mat-label>{{ 'Reactions' | translate }}</mat-label>\n                                            <mat-select [disabled]=\"disabled\" [formControl]=\"toppings\" multiple>\n                                            <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                                            </mat-select>\n                                            </mat-form-field>\n                                            \n                                            </div><!-- Allergy Wrapper Ends -->\n                                            </div>\n                                <!-- </div> -->\n                            \n                            </div>\n                  \n                               </div>\n                             \n                                 \n                               \n                                    <div class=\"col-md-9\">              \n                                        <h4 style=\"color: #366e86;font-weight: 300;margin-top: 4px;\"> Current Allergies</h4><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n                                          <br/>\n                                         \n                                          <div class=\"card tb\">\n                                              <div class=\"table-responsive\">\n                                                  <table class=\"table table-striped\">\n                                                      <thead>\n                                                          <tr>\n                                                              <th>Visit No</th>\n                                                              <th>Allergy Category</th>\n                                                              <th>Allergic To</th>\n                                                              <th>Status</th>\n                                                              <!-- <th>Action</th> -->\n                                                          </tr>                                        \n                                                      </thead>\n                                                      <tbody>\n                                                          <tr>\n                                                              <td>OP-002</td>\n                                                              <td>Drug</td>\n                                                              <td>POLYETHYLENE GLYCOL 3350 AND ELECTROLYTES</td>\n                                                              <td>Resolved</td>\n                                                              <!-- <td><span class=\"badge badge-pill primary-color\">Edit</span></td> -->\n                                                          </tr>\n                                                          <tr>\n                                                              <td>OP-002</td>\n                                                              <td>Environmental</td>\n                                                              <td>Pollen</td>\n                                                              <td>Active</td>\n                                                              <!-- <td><span class=\"badge badge-pill primary-color\">Edit</span></td> -->\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                              </div>\n                                          </div>\n                                  <br/>\n                                          <h4 class=\"tp\" style=\"color: #366e86;font-weight: 300;margin-top: -15px;\"> Past Allergies</h4\n                                            ><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>                                          <br/>\n                                    \n                                          <div class=\"card tb\">\n                                              <div class=\"table-responsive\">\n                                                  <table class=\"table table-striped\">\n                                                      <thead>\n                                                          <tr>\n                                                              <th>Visit No</th>\n                                                              <th>Allergy Category</th>\n                                                              <th>Allergic To</th>\n                                                              <th>Status</th>\n                                                              <!-- <th>Action</th> -->\n                                                          </tr>                                        \n                                                      </thead>\n                                                      <tbody>\n                                                          <tr>\n                                                              <td>OP-001</td>\n                                                              <td>Drug</td>\n                                                              <td>POLYETHYLENE GLYCOL 3350 AND ELECTROLYTES</td>\n                                                              <td>Active</td>\n                                                              <!-- <td><span class=\"badge badge-pill primary-color\">Edit</span></td> -->\n                                                          </tr>\n                                                          <tr>\n                                                              <td>OP-001</td>\n                                                              <td>Environmental</td>\n                                                              <td>Pollen</td>\n                                                              <td>Uncharted</td>\n                                                              <!-- <td><span class=\"badge badge-pill primary-color\">Edit</span></td> -->\n                                                          </tr>\n                                                      </tbody>\n                                                  </table>\n                                              </div>\n                                          </div>\n                                     \n                              \n                              \n                                      </div>\n                                  </div></div>\n                                                        \n                                            \n \n                                                 <!-- </div> -->\n                                       \n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n                 <script src=\"js/material.js\"></script>\n                 <!-- Bootstrap tooltips -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js\"></script>\n                 <!-- Bootstrap core JavaScript -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n                 <!-- MDB core JavaScript -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/js/mdb.min.js\"></script>\n                 <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n                 <!-- Include all compiled plugins (below), or include individual files as needed -->\n                 <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-home></app-home>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"container-fluid\" id=\"diag\">\n        <!-- <h2 style=\"color: #366e86;\">Diagnosis</h2><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/> -->\n\n                <div id=\"diagnosis-section\" class=\"row subsection\" >\n                        <div class=\"col-md-12 col-lg-12 col-sm-12\">\n                                <br>\n                                <div class=\"row\">\n                                                <div class=\"col-md-3 bt\">\n                                                                <h4 style=\"color: #366e86;\">Diagnosis</h4>\n                                                                <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px\"/>\n\n                                                                <div class=\"hero-message\">\n                                                                    <li id=\"package\" class=\"list-group-item lgi-custom\"  style=\"margin-top: 10px;\"> Provisional Diagnosis<i id=\"chn2\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                                                  \n                                                                <div class=\"col-md-12\">\n                                                                    <div class=\"card sc\" id=\"scan2\" style=\"display:none;padding: 10px;\">\n                                                                                                        \n                                                                        <div class=\"autocomplete\" >\n                                                                          <input id=\"dig\" type=\"text\" placeholder=\"Diagnosis\"  class=\"inputTextClass\">\n                                                                        </div></div></div></div>\n                                                                <div class=\"hero-message\">\n                                                \n                                                                    <li id=\"primary\" class=\"list-group-item lgi-custom selected\"  ng-click=\"myFunc()\"> Primary Diagnosis* <i id=\"chn\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>  \n                                                           \n                                                            </div>\n                                                            <div class=\"row\">\n                                                                                                      \n                                                                <div class=\"col-md-12\">\n                                                                    <div class=\"card sc\" id=\"scan\"  style=\"display:none;padding: 10px;\">\n                                                                        <div class=\"autocomplete\">\n                                                                          <input id=\"service1\" type=\"text\" name=\"service1\" placeholder=\"Primary Diagnosis*\" class=\"inputTextClass\">\n                                                                        </div> </div></div></div>\n                                                \n                                                                        <div class=\"hero-message\">\n                                                                            <li id=\"drug\" class=\"list-group-item lgi-custom\" >Secondary Diagnosis*<i id=\"chn1\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                                                      \n                                                                        <div class=\"col-md-12\">\n                                                                            <div class=\"card sc\" id=\"scan1\" style=\"display:none;padding: 10px;\">\n                                                                                                            \n                                                                                <div class=\"autocomplete\" >\n                                                                                 <input id=\"service2\" type=\"text\" placeholder=\"Secondary Diagnosis*\"  class=\"inputTextClass\">\n                                                                               </div> </div></div></div>\n                                                                    \n                                                               \n                                                                \n                                                            </div>\n\n                                        <!-- </div> -->\n                                        <div class=\"col-md-9 col-lg-9 col-sm-9\" id=\"prime\">\n                             \n                                                                 <div id=\"exp1\"> \n                                                                 <mat-expansion-panel [expanded]=\"true\"  style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                                 <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                                 <mat-panel-title >\n                                                                 <h4 style=\"color: #366e86;\">  Primary Diagnosis</h4>\n\n                                                                </mat-panel-title>\n                                                                      \n                                                                </mat-expansion-panel-header>\n                                                                        \n                                                                 <!-- <div class=></div> -->\n                                                                  <div class=\"card tb\">\n                                                                <div class=\"table-responsive\">\n                                                                 <table class=\"table table-striped\" id=\"tab1\" >\n                                                                 <thead>\n                                                                 <tr>\n                                                                        <th>\n                                                                        Primary Diagnosis\n                                                                        </th>\n                                                                        <th>Present On Admission</th>\n                                                                        \n                                                                        </tr>\n                                                                        </thead>\n                                                                        <tbody>\n                                                                        <tr>\n                                                                        <td>\n                                                                                \n                                                                        <p id=\"newValueDisease\">AMINOLEVULINIC ACID (RANDOM)-URINE</p>\n                                                                        </td>\n                                                                        <td>\n                                                                         <section class=\"example-section\">\n                                                                        <mat-checkbox class=\"example-margin\" >Present</mat-checkbox>\n                                                                          </section>\n                                                                        </td>\n                                                                        </tr>\n                                                                        </tbody>\n                                                                        </table>\n                                                                        </div>\n                                                                        </div>\n                                                                        \n                                                                        </mat-expansion-panel></div>\n\n                                                                        <div id=\"exp2\" style=\"display: none !important;\">\n                                                                        <mat-expansion-panel [expanded]=\"true\" \n                                                                        (closed)=\"true\"  style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                                        <mat-expansion-panel-header  style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                                        <mat-panel-title>\n                                                                                        <h4 style=\"color: #366e86;\"> Secondary diagnosis</h4>\n                                                                        </mat-panel-title>\n                                                                        \n                                                                        </mat-expansion-panel-header>\n                                                                        <div class=\"card tb\">\n                                                                        <div class=\"table-responsive\">\n                                                                        <table class=\"table table-striped\" id=\"tab2\" style=\"display: none;\">\n                                                                        <thead>\n                                                                        <tr>\n                                                                        <th>Secondary diagnosis</th>\n                                                                        <th> Present On Admission</th>\n                                                                        \n                                                                        </tr>\n                                                                        </thead>\n                                                                        <tbody>\n                                                                        <tr>\n                                                                        <td>\n                                                                        <p id=\"newValueDisease1\"></p>\n                                                                        </td>\n                                                                        <td>\n                                                                         <section class=\"example-section\">\n                                                                        <mat-checkbox class=\"example-margin\" >Present</mat-checkbox>\n                                                                         </section>\n                                                                        </td> </tr>\n                                                                        </tbody>\n                                                                        </table>\n                                                                        </div>\n                                                                        </div>\n                                                                         \n                                                                        </mat-expansion-panel></div>\n                                                                      </div>\n\n                              \n                        </div>\n                \n        </div></div>\n</div>\n\n<script src=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/codemirror.js\"\n        type=\"text/javascript\"></script>\n<script src=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/javascript.js\"\n        type=\"text/javascript\"></script>\n<script src=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/css.js\"\n        type=\"text/javascript\"></script>\n<script src=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/xml.js\"\n        type=\"text/javascript\"></script>\n<script src=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/htmlmixed.js\"\n        type=\"text/javascript\"></script>\n<link href=\"https://jsplayground.syncfusion.com/16.1.0.24/scripts/web/codemirror/codemirror.min.css\" rel=\"stylesheet\" />\n\n<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\"></script>\n<!-- JQuery -->\n<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<!-- Bootstrap tooltips -->\n<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js\"></script>\n<!-- Bootstrap core JavaScript -->\n<script type=\"text/javascript\"\n        src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<!-- MDB core JavaScript -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hist/hist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hist/hist.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n                \n                <div class=\"container-fluid\" id=\"cc\">\n <!-- <h2 style=\"color: #366e86;\">CC & HPI</h2><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n         \n          <br/> -->\n              \n          <div class=\"row\" style=\"margin-top: 10px;\">\n          \n            <div class=\"col-md-3 bt\">\n                    \n                    <h4 style=\"color: #366e86;\"> History And Examinations</h4>\n                    <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n                <div class=\"hero-message\">\n\n                        <li id=\"chief\" class=\"list-group-item lgi-custom selected\"  data-target=\"chief-complaints\" ng-click=\"myFunc()\" style=\"margin-top: 10px;\">Chief Complaints  <i id=\"chn\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>  \n               \n                </div>\n                <div class=\"row\">\n                                                      \n                        <div class=\"col-md-12\">\n                                           <div class=\"card sc\" id=\"auto1\"  style=\"display:none;padding: 10px;\">\n                                             \n                                                <img id=\"arrow1\" src=\"assets/images/right-arrow.png\" style=\"width: 29px;position: absolute;right: 10px;cursor: pointer;\" /><br/>\n                                                <input id=\"chief1\" type=\"text\" name=\"chief1\" placeholder=\"Chief Complaints\"  class=\"inputTextClass\">\n                                              \n\n\n                                               \n                                                    <!-- <input id=\"chief1\" type=\"text\" name=\"chief1\" placeholder=\"ChiefComplaints\" class=\"inputTextClass\"> -->\n                                                  </div> </div></div>\n\n                <div class=\"hero-message\">\n                        <li id=\"hist\" class=\"list-group-item lgi-custom\" data-target=\"history-illness\">History Of Illness <i id=\"chn1\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"card sc\" id=\"auto2\" style=\"display:none;padding: 10px;\">\n                                <img id=\"arrow\" src=\"assets/images/right-arrow.png\" style=\"width: 29px;position: absolute;right: 10px;cursor: pointer;\" /><br/>\n                                <input id=\"hist1\" type=\"text\" name=\"hist1\" placeholder=\"History Of Illness\"  class=\"inputTextClass\">\n                                 \n                              \n                                 \n                               </div></div></div>\n                <div class=\"hero-message\">\n                        <li id=\"com\" class=\"list-group-item lgi-custom\" data-target=\"co-morbidities\">Comorbidities <i id=\"chn2\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-12\">\n                                <div class=\"card sc\" id=\"auto3\" style=\"display:none;padding: 10px;\">\n                                                             \n                                        <div class=\"autocomplete\" >\n                                          <input id=\"com1\" type=\"text\" name=\"com1\" placeholder=\"Comorbidity\"  class=\"inputTextClass\">\n                                        </div></div></div></div>\n                <div class=\"hero-message\">\n                        <li id=\"asso\" class=\"list-group-item lgi-custom\" data-target=\"associated-symptoms\">AssociatedSymptoms <i id=\"chn3\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-12\">\n                                <div class=\"card sc\" id=\"auto4\" style=\"display:none;padding: 10px;\">\n                                        <div class=\"autocomplete\">\n                                         <input id=\"asso1\" type=\"text\" name=\"asso1\" placeholder=\"AssociatedSymptoms\" class=\"inputTextClass\">\n                                       </div></div></div></div></div>\n         <!-- <div class=\"hero-message\"> \n              <h5 style=\"color: #366e86;\">   History And Examinations</h5>\n              <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n  <ul class=\"list-group list-group-flush\" style=\"padding:10px;\">\n\n\n    \n      <li id=\"chief\" class=\"list-group-item lgi-custom selected\"  data-target=\"chief-complaints\" ng-click=\"myFunc()\">ChiefComplaints</li>  \n      <li id=\"hist\" class=\"list-group-item lgi-custom\" data-target=\"history-illness\">HistoryOfIllness</li>\n      <li id=\"com\" class=\"list-group-item lgi-custom\" data-target=\"co-morbidities\">coMorbidities</li>\n      <li id=\"asso\" class=\"list-group-item lgi-custom\" data-target=\"associated-symptoms\">AssociatedSymptoms</li>\n  </ul></div> -->\n                                  <!-- <div class=\"row\"> \n                                                \n                                  <div class=\"col-md-10\">\n                                                 <div class=\"dropdown\"  >\n                                                                 <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu5\" data-toggle=\"dropdown\"\n                                                                   aria-haspopup=\"true\" aria-expanded=\"false\" style=\"    width: 100%;border-bottom: 1px solid #dad3d3;color: white;\">\n                                                                   History And Examinations\n                                                                 </button>\n                                                                <ul  class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu5\" id=\"options\" role=\"menu\"  name=\"college_name\" >\n                                                                 \n                                                                   <a value=\"chief\" class=\"dropdown-item\" id=\"chief\" selected>ChiefComplaints</a >\n                                                                   <a value=\"hist\" class=\"dropdown-item\"  id=\"hist\" >HistoryOfIllness</a >\n                                                                   <a value=\"com\" class=\"dropdown-item\" id=\"com\" >coMorbidities</a >\n                                                                   <a value=\"asso\" class=\"dropdown-item\" id=\"asso\" >AssociatedSymptoms</a >\n                                                                  \n                                                                </ul></div>\n                                                         \n                                                         </div>\n                                                         \n                                                               \n \n \n                                                         <div class=\"col-md-2\">\n                                                                         <i id=\"chn\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i>\n                                                         </div>\n                                         \n                                                         \n                                 </div>\n                                 <div class=\"row\">\n                                                      \n                                   <div class=\"col-md-12\">\n                                                      <div class=\"card sc\" id=\"auto1\"  style=\"display:none;padding: 10px;\">\n                                                        <div class=\"autocomplete\">\n                                                               <input id=\"chief1\" type=\"text\" name=\"chief1\" placeholder=\"ChiefComplaints\" class=\"inputTextClass\">\n                                                             </div> </div>\n                                                             <div class=\"card sc\" id=\"auto2\" style=\"display:none;padding: 10px;\">\n                                                              <img id=\"arrow\" src=\"assets/images/right-arrow.png\" style=\"width: 29px;position: absolute;right: 10px;cursor: pointer;\" /><br/>\n                                                          \n                                                              <textarea id=\"hist1\" type=\"text\" name=\"hist1\" placeholder=\"HistoryOfIllness\"  class=\"inputTextClass\">\n                                                             </textarea>\n                                                            \n                                                               \n                                                             </div>\n                                                             <div class=\"card sc\" id=\"auto3\" style=\"display:none;padding: 10px;\">\n                                                             \n                                                             <div class=\"autocomplete\" >\n                                                               <input id=\"com1\" type=\"text\" name=\"com1\" placeholder=\"coMorbidities\"  class=\"inputTextClass\">\n                                                             </div></div>\n                                                             <div class=\"card sc\" id=\"auto4\" style=\"display:none;padding: 10px;\">\n                                                              <div class=\"autocomplete\">\n                                                               <input id=\"asso1\" type=\"text\" name=\"asso1\" placeholder=\"AssociatedSymptoms\" class=\"inputTextClass\">\n                                                             </div></div>\n\n                                                            \n                                                           </div>\n                 </div></div> -->\n                             <div class=\"col-md-9\">\n \n                                     <mat-expansion-panel [expanded]=\"true\" id=\"exp1\" style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                         <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                         <mat-panel-title >\n                                         <h4 style=\"color: #366e86;\">Chief Complaints</h4>\n \n                                         </mat-panel-title>\n                                       \n                                         </mat-expansion-panel-header>\n \n                                 <div class=\"card tb\">\n                                                 <div class=\"table-responsive\">\n                                                    <table class=\"table table-striped\" id=\"chiefTable\">\n                                                        <thead>\n                                                            <tr>\n                                                                <!-- <th style=\"width: 10%;\">{{ 'Sl No' | translate}}</th> -->\n                                                                <th >{{ 'Description' | translate}}</th>\n                                                            </tr>                                        \n                                                        </thead>\n                                                        <tbody>\n                                                          <tr>\n                                                            <td>BAND LIKE SENSATION</td>\n                                                    </tr>\n                                                        </tbody>\n                                                    </table></div></div>\n                                               </mat-expansion-panel>\n \n \n                                               <div id=\"exp2\" style=\"display: none !important;\"> \n \n \n                                                   <mat-expansion-panel [expanded]=\"true\" style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                       <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                       <mat-panel-title >\n                                                       <h4 style=\"color: #366e86;\"> History Of Illness</h4>\n               \n                                                       </mat-panel-title>\n                                                     \n                                                       </mat-expansion-panel-header>\n                                                 <div class=\"card tb\">\n                                                   <div class=\"table-responsive\">\n                                                    <table class=\"table table-striped\" id=\"historyofIllness\">\n                                                        <thead>\n                                                            <tr>\n                                                                    <!-- <th style=\"width: 10%;\">{{ 'Sl No' | translate}}</th> -->\n                                                                    <th >{{ 'Description' | translate}}</th>\n                                                            </tr>                                        \n                                                        </thead>\n                                                        <tbody></tbody>\n                                                                \n                                                    </table></div></div>\n                                                     </mat-expansion-panel></div>\n                                                   \n \n \n \n                                                     <div id=\"exp3\" style=\"display: none !important;\"> \n \n \n                                                         <mat-expansion-panel [expanded]=\"true\"  style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                             <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                             <mat-panel-title >\n                                                             <h4 style=\"color: #366e86;\">Comorbidity</h4>\n                     \n                                                             </mat-panel-title>\n                                                           \n                                                             </mat-expansion-panel-header>\n   \n                                                       <div class=\"card tb\" >\n                                                         <div class=\"table-responsive\">\n                                                            <table class=\"table table-striped\" id=\"comoriditiesTable\">\n                                                                <thead>\n                                                                    <tr>\n                                                                            <!-- <th style=\"width: 10%;\">{{ 'Sl No' | translate}}</th> -->\n                                                                            <th >{{ 'Description' | translate}}</th>\n                                                                    </tr>                                        \n                                                                </thead>\n                                                                <tbody>\n                                                                       \n                                                                </tbody>\n                                                            </table></div></div>\n                                                             </mat-expansion-panel></div>\n                                                       \n \n                                                           <div id=\"exp4\" style=\"display: none !important;\"> \n \n \n                                                               <mat-expansion-panel [expanded]=\"true\" style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                                   <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                                   <mat-panel-title >\n                                                                   <h4 style=\"color: #366e86;\"> Associated Symptoms</h4>\n                           \n                                                                   </mat-panel-title>\n                                                                 \n                                                                   </mat-expansion-panel-header>\n   \n                                                             <div class=\"card tb\">\n                                                               <div class=\"table-responsive\">\n                                                                <table class=\"table table-striped\" id=\"assosymTable\">\n                                                                    <thead>\n                                                                        <tr>\n                                                                                <!-- <th style=\"width: 10%;\">{{ 'Sl No' | translate}}</th> -->\n                                                                                <th >{{ 'Description' | translate}}</th>\n                                                                        </tr>                                        \n                                                                    </thead>\n                                                                    <tbody>\n                                                                           \n                                                                    </tbody>\n                                                                </table></div></div>\n                                                                   </mat-expansion-panel></div>\n   \n                                                           </div>\n                                                        \n                                               </div>\n \n \n                                      \n         \n                           </div>\n                             \n                                                 <!-- </div> -->\n                                       \n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n                 <script src=\"js/material.js\"></script>\n                 <!-- Bootstrap tooltips -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js\"></script>\n                 <!-- Bootstrap core JavaScript -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n                 <!-- MDB core JavaScript -->\n                 <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/js/mdb.min.js\"></script>\n                 <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n                 <!-- Include all compiled plugins (below), or include individual files as needed -->\n                 <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div id=\"bg\">\n     \n</div> \n<header></header>\n<a class=\"btn-float-chat btn-sm btn-floating blue-gradient my-0 waves-effect waves-light\">\n  <i class=\"fas fa-comments\"></i>\n</a>\n\n<!-- <div class=\"container-fluid top-nav\" id=\"top-nav-bar\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"topnav\">\n          \n            <a href=\"#\">Claims</a>\n            <a href=\"#\">Financials</a>\n            <a href=\"#\">Reports</a>\n            <a href=\"#\">Quality</a>\n            <a href=\"#\">Support</a>\n            <a href=\"#\"><i class=\"fas fa-cog\" style=\"color: white;\"></i></a>\n          \n            <a href=\"#\" class=\"rt-most last-child\">Logout</a>\n            <a href=\"#\" class=\"rt-most no-bottom txt-ic\"><i class=\"fas fa-search\"></i></a>\n            <a href=\"#\" class=\"rt-most no-bottom txt-bx\"><span class=\"search-box\"><input type=\"text\" class=\"form-control top-search\" placeholder=\"Search\"></span></a>\n            <a href=\"#\" class=\"rt-most no-bottom txt-ic\"><i class=\"fas fa-user-md\"></i></a>\n\n          </div>\n      </div>\n  </div>\n</div> -->\n\n<div class=\"container-fluid nav-top\">\n  <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n          \n          <div class=\"card card-custom\">\n              <img class=\"pic\" src=\"assets/images/user.webp\"> \n              <div class=\"name\">Mr.Manas Rahman | Male | 43 years</div>\n              <div class=\"name1\">AKHS-T-00154345 | OP-204  </div>\n          </div>\n          \n          <a class=\"slide-btn btn-floating btn-sm skyblue-gradient waves-effect waves-light\">\n              <img class=\"pic-icon\" src=\"assets/images/icons/icon_down_double_arrow.webp\">\n              </a>\n\n           <div class=\"patient-banner-info card custom-card card-custom-info btn-glass btn-info\" style=\"display: none;\">\n              <div class=\"name-info ptd-blood\">AB +Ve</div>\n              <div class=\"name-info ptd-phone\">+91 9876543210 </div>\n              <div class=\"name-info ptd-location\">NURSE STATION FF/ DLX B 1</div>\n              <div class=\"name-info ptd-consultant\">Dr. Yasar </div>\n              <div class=\"name-info ptd-current-visit\">In-Patient (Under IP Care)</div>\n              <div class=\"name-info ptd-admitted-on\">08-Jul-2019 (12 days in IP Care.) </div>\n              <div class=\"name-info ptd-patient-condition\">Start Consultation </div>\n              <div class=\"name-info ptd-insurance-name\">Medsave Healthcare TPA ltd </div>\n              <div class=\"name-info ptd-eligibility\">Medsave Healthcare TPA ltd/Aug 28, 2020 </div>\n              <div class=\"name-info ptd-policy-no\">zzxxxaa2132 </div>\n          </div>\n                                     \n\n      </div>\n      <div class=\"col-md-8\">\n         \n       \n  </div>\n</div>\n\n<div class=\"page-wrap\">\n\n  <ul class=\"cbp-vimenu\">\n    <li id=\"vitals\" class=\"waves-effect sidemenu active\"  name=\"name\" [routerLinkActive]=\"['active']\"><a routerLink=\"/vitals\"><img class=\"icon-vitals\"></a>Vitals</li>\n    <li id=\"allergy\" class=\"waves-effect sidemenu\" [routerLinkActive]=\"['active']\"><a routerLink=\"/allergy\"><img class=\"icon-allergy\"></a>Allergy</li>\n    <li id=\"ccandhpi\" class=\"waves-effect sidemenu\" [routerLinkActive]=\"['active']\"><a routerLink=\"/hist\" href=\"#\"><img class=\"icon-report\"></a>CC & HPI</li>\n     <li id=\"diagnosis\" class=\"waves-effect sidemenu\" [routerLinkActive]=\"['active']\"><a routerLink=\"/diagnosis\"  href=\"#\"><img class=\"icon-lab\"></a>Diagnosis</li>\n    <li id=\"orders\" class=\"waves-effect sidemenu\" [routerLinkActive]=\"['active']\"><a routerLink=\"/orders1\"><img class=\"icon-first-aid\"></a>Orders</li>\n  </ul>\n\n  <div class=\"main\">\n\n      <div class=\"container-fluid\">\n          <div class=\"row\" style=\"    margin-top: -8px;\">\n              <div class=\"col-md-1 col-sm-1\">\n                  <button mat-button class=\"backB\">\n                      <i class=\"material-icons\">\n                          keyboard_arrow_left\n                          </i>\n                     Back\n                    </button>\n\n                </div>\n                  <!-- <a href=\"#\" title=\"Back\" class=\"btn-back btn btn-success btn-sm waves-effect\" style=\"margin-top: 8px;\"><i class=\"fa fa-angle-left\" style=\"font-size:20px\"></i>Back</a>\n              </div> -->\n              <div class=\"col-md-10 col-sm-10\">\n                  <div class=\"no-pad scroller\">\n                      <div class=\"no-pad btn-header-links padding-align top-adjust\" id=\"scroll-div\">\n                           <div class=\"list-group list-group-visit list-group-horizontal\">\n                              <!-- <a href=\"#\" class=\"left-btn-scroller left-scroll list-group-item lgi-visit waves-effect\"><i class=\"fas fa-chevron-left\"></i></a> -->\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect active\">18 July 2019<br>OP-204</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">17 Jul 2019<br>OP-103</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">16 Jun 2019<br>OP-092</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">15 May 2019<br>OP-053</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">15 Apr 2019<br>OP-042</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">15 Mar 2019<br>OP-039</a>\n                              <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\">15 Feb 2019<br>OP-020</a>\n                              <!-- <a href=\"#\" class=\"list-group-item lgi-visit waves-effect\"><i class=\"fas fa-chevron-right\"></i></a> -->\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button mat-button class=\"sv\">\n                      <i class=\"material-icons\">\n                          save_alt\n                          </i>\n                   Save\n                    </button>\n                  <!-- <a href=\"#\" title=\"Save\" class=\"btn-save btn btn-success btn-sm waves-effect\" id=\"save1\" style=\"margin-top: 14px;\"> Save</a> -->\n              </div>\n              \n          </div>\n      </div></div></div>\n\n\n\n<router-outlet></router-outlet>\n\n\n<footer></footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders1/orders1.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders1/orders1.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n                \n               <div class=\"container-fluid\" id=\"ord\">\n<!-- <h2 style=\"color: #366e86;\">Orders</h2><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n        \n         <br/>\n              -->\n         <div class=\"row\" style=\"margin-top: 10px;\" >\n           \n            <div class=\"col-md-3 bt\">\n                <h4 style=\"color: #366e86;\"> Orders</h4>\n                <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n                <div class=\"hero-message\">\n\n                    <li id=\"service\" class=\"list-group-item lgi-custom selected\"  data-target=\"chief-complaints\" ng-click=\"myFunc()\" style=\"margin-top: 10px;\">Service <i id=\"chn\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>  \n           \n            </div>\n            <div class=\"row\">\n                                                      \n                <div class=\"col-md-12\">\n                    <div class=\"card sc\" id=\"scan\"  style=\"display:none;padding: 10px;\">\n                        <div class=\"autocomplete\">\n                          <input id=\"service1\" type=\"text\" name=\"service1\" placeholder=\"Service Name\" class=\"inputTextClass\">\n                        </div> </div></div></div>\n\n                        <div class=\"hero-message\">\n                            <li id=\"drug\" class=\"list-group-item lgi-custom\" >Drugs<i id=\"chn1\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                    </div>\n                    <div class=\"row\">\n                                                      \n                        <div class=\"col-md-12\">\n                            <div class=\"card sc\" id=\"scan1\" style=\"display:none;padding: 10px;\">\n                                                            \n                                <div class=\"autocomplete\" >\n                                 <input id=\"drug1\" type=\"text\" name=\"drug1\" placeholder=\"Drug Name\"  class=\"inputTextClass\">\n                               </div> </div></div></div>\n                    <div class=\"hero-message\">\n                        <li id=\"package\" class=\"list-group-item lgi-custom\" >Package<i id=\"chn2\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n                </div>\n                <div class=\"row\">\n                                                      \n                    <div class=\"col-md-12\">\n                        <div class=\"card sc\" id=\"scan2\" style=\"display:none;padding: 10px;\">\n                                                            \n                            <div class=\"autocomplete\" >\n                              <input id=\"package1\" type=\"text\" name=\"package1\" placeholder=\"Package Name\"  class=\"inputTextClass\">\n                            </div></div></div></div>\n               \n                <div class=\"hero-message\">\n                    <li id=\"direct\" class=\"list-group-item lgi-custom\" >Direct<i id=\"chn3\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n            </div>\n            <div class=\"row\">\n                                                      \n                <div class=\"col-md-12\">\n                    <div class=\"card sc\" id=\"scan3\" style=\"display:none;padding: 10px;\">\n                        <div class=\"autocomplete\">\n                         <input id=\"direct1\" type=\"text\" name=\"direct1\" placeholder=\"Direct Name\" class=\"inputTextClass\">\n                       </div></div></div></div>\n            <div class=\"hero-message\">\n                    <li id=\"set\" class=\"list-group-item lgi-custom\" >Orderset<i id=\"chn4\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n            </div>\n            <div class=\"row\">\n                                                      \n                <div class=\"col-md-12\">\n                    <div class=\"card sc\" id=\"scan4\" style=\"display:none;padding: 10px;\">\n                        <div class=\"autocomplete\">\n                          <input id=\"set1\" type=\"text\" name=\"set1\" placeholder=\"Order Name\"  class=\"inputTextClass\">\n                        </div></div></div></div>\n            <div class=\"hero-message\">\n                <li id=\"diet\" class=\"list-group-item lgi-custom\" >Diet Prescription<i id=\"chn5\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i></li>\n        </div>\n            </div>\n    <!-- <div class=\"hero-message\"> \n       \n                   <h5 style=\"color: #366e86;\"> Orders</h5>\n                   <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n                 <ul class=\"list-group list-group-flush\" style=\"padding:10px;\">\n                     <li id=\"chief\" class=\"list-group-item lgi-custom selected\"  data-target=\"chief-complaints\" ng-click=\"myFunc()\">Service</li>\n                     <li id=\"hist\" class=\"list-group-item lgi-custom\" data-target=\"history-illness\">Drugs</li>\n                     <li id=\"com\" class=\"list-group-item lgi-custom\" data-target=\"co-morbidities\">package</li>\n                     <li id=\"asso\" class=\"list-group-item lgi-custom\" data-target=\"associated-symptoms\">Direct</li>\n                     <li id=\"asso\" class=\"list-group-item lgi-custom\" data-target=\"associated-symptoms\">Orderset</li>\n                     <li id=\"asso\" class=\"list-group-item lgi-custom\" data-target=\"associated-symptoms\">Diet Prescription</li>\n                 </ul></div></div> -->\n           <!-- <div class=\"col-md-4 bt\">\n         <div class=\"hero-message\"> \n                              \n                                    <div class=\"row\"> \n                                               \n                                 <div class=\"col-md-10\">\n                                                <div class=\"dropdown\"  >\n                                                                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu5\" data-toggle=\"dropdown\"\n                                                                  aria-haspopup=\"true\" aria-expanded=\"false\" style=\"    width: 100%;border-bottom: 1px solid #dad3d3;color: white;\">\n                                                                  Orders\n                                                                </button>\n                                                               <ul  class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu5\" id=\"options\" role=\"menu\"  name=\"college_name\" >\n                                                                \n                                                                  <a value=\"service\" class=\"dropdown-item\" id=\"service\" selected>Service</a >\n                                                                  <a value=\"drug\" class=\"dropdown-item\"  id=\"drug\" >Drugs</a >\n                                                                  <a value=\"package\" class=\"dropdown-item\" id=\"package\" >Package</a >\n                                                                  <a value=\"direct\" class=\"dropdown-item\" id=\"direct\" >Direct</a >\n                                                                  <a value=\"set\" class=\"dropdown-item\" id=\"set\" >Orderset</a >\n                                                                  <a value=\"diet\" class=\"dropdown-item\" id=\"diet\">Diet Prescription</a >\n                                                               </ul></div>\n                                                        \n                                                        </div>\n                                                        \n                                                              \n\n\n                                                        <div class=\"col-md-2\">\n                                                                        <i id=\"chn\" class=\"fa fa-plus\" style=\" border-radius: 50%;\"></i>\n                                                        </div>\n                                        \n                                                        \n                                </div>\n                                <div class=\"row\">\n                                                     \n                                  <div class=\"col-md-12\">\n                                                           <div class=\"card sc\" id=\"scan\"  style=\"display:none;padding: 10px;\">\n                                                            <div class=\"autocomplete\">\n                                                              <input id=\"service1\" type=\"text\" name=\"service1\" placeholder=\"Service Name\" class=\"inputTextClass\">\n                                                            </div> </div>\n                                                            <div class=\"card sc\" id=\"scan1\" style=\"display:none;padding: 10px;\">\n                                                            \n                                                             <div class=\"autocomplete\" >\n                                                              <input id=\"drug1\" type=\"text\" name=\"drug1\" placeholder=\"Drug Name\"  class=\"inputTextClass\">\n                                                            </div> </div>\n                                                            <div class=\"card sc\" id=\"scan2\" style=\"display:none;padding: 10px;\">\n                                                            \n                                                            <div class=\"autocomplete\" >\n                                                              <input id=\"package1\" type=\"text\" name=\"package1\" placeholder=\"Package Name\"  class=\"inputTextClass\">\n                                                            </div></div>\n                                                            <div class=\"card sc\" id=\"scan3\" style=\"display:none;padding: 10px;\">\n                                                             <div class=\"autocomplete\">\n                                                              <input id=\"direct1\" type=\"text\" name=\"direct1\" placeholder=\"Direct Name\" class=\"inputTextClass\">\n                                                            </div></div>\n                                                            <div class=\"card sc\" id=\"scan4\" style=\"display:none;padding: 10px;\">\n                                                            <div class=\"autocomplete\">\n                                                              <input id=\"set1\" type=\"text\" name=\"set1\" placeholder=\"Order Name\"  class=\"inputTextClass\">\n                                                            </div></div>\n                                                          \n                                                        \n                                                        </div>\n                </div>\n                              </div></div> -->\n                            \n                               \n                               \n                              \n                                <div class=\"col-md-9\">\n\n                                    <mat-accordion>\n                                     \n\n\n                                    <mat-expansion-panel [expanded]=\"true\" id=\"exp1\" style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                        <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                        <mat-panel-title >\n                                        <h4 style=\"color: #366e86;\"> Service</h4>\n\n                                        </mat-panel-title>\n                                      \n                                        </mat-expansion-panel-header>\n\n                                <div class=\"card tb\">\n                                                <div class=\"table-responsive\">\n                                                <table class=\"table table-striped\" id=\"current\" >\n                                                   \n                                                  <thead>\n                                                    <tr>\n                                                      <th scope=\"col\">Service Name</th>\n                                                      <th scope=\"col\">Portable</th>\n                                                      <th scope=\"col\">Qty</th>\n                                                      <th scope=\"col\">Priority</th>\n                                                      <th scope=\"col\">Service Center</th>\n                                                      <th scope=\"col\">Actions</th>\n                                                    </tr>\n                                                    \n                                                \n                                                  </thead> \n                                                  <tbody>\n                                                      <tr>\n                                                          <td>ADMINISTRATIVE CHARGES</td>\n                                                         \n                                                          <td>No</td>\n                                                          <td><input class='form-control' type='text'  style='margin-left: -9px;width: 43px;background-color:transparent;height: 17px; box-shadow: none; color: #fff; border: none; border-bottom: 1.5px solid #a9a4a6;border-radius: 0;'/></td>\n                                                          <td><select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: #fff;border: none;border-radius: 0;padding:0;width:66px;cursor:pointer; margin-top: -5px;height: 23px;border-bottom: 1.5px solid #a9a4a6;'><option style='color:black;'>Select</option><option style='color:black;'>Routine</option><option style='color:black;'>Stat</option></select></td>\n                                                          <td><select class='form-control' style='    margin-top: -5px;box-shadow:none;display:block !important; background-color: transparent; color: #fff;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;height: 23px;border-bottom: 1.5px solid #a9a4a6;'><option style='color:black;'>Select</option><option style='color:black;'>Banjara Demo</option><option style='color:black;'>Blood Bank</option></select></td>\n                                                          <td><img data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img title='close' data-placement='bottom'  width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' /></td>\n                                            \n                                                       </tr>\n                                                  </tbody>\n                                                </table></div></div>\n                                              </mat-expansion-panel>\n\n\n                                              <div id=\"exp2\" style=\"display: none !important;\"> \n\n\n                                                  <mat-expansion-panel style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                      <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                      <mat-panel-title >\n                                                      <h4 style=\"color: #366e86;\"> Drugs</h4>\n              \n                                                      </mat-panel-title>\n                                                    \n                                                      </mat-expansion-panel-header>\n                                                <div class=\"card tb\">\n                                                  <div class=\"table-responsive\">\n                                                      <table class=\"table table-striped\" id=\"drugtb\" style=\"display: none;\">\n                                                        <thead>\n                                                          <tr>\n                                                            <th scope=\"col1\">Generic/Item Name</th>\n                                                            <th scope=\"col1\">Frequency</th>\n                                                            <th scope=\"col1\">No Of Days</th>\n                                                            <th scope=\"col1\">Total Qty</th>\n                                                            <th scope=\"col1\">Drug Instructions</th>\n                                                            <th scope=\"col1\">Priority</th>\n                                                            <th scope=\"col1\">Order No</th>\n                                                            <th scope=\"col1\">Actions</th>\n                                                          </tr>\n                                                          \n                                                      \n                                                        </thead>\n                                                        <tbody>\n                                                          \n                                                        </tbody>\n                                                      </table></div></div>\n                                                    </mat-expansion-panel></div>\n                                                  \n\n\n\n                                                    <div id=\"exp3\" style=\"display: none !important;\"> \n\n\n                                                        <mat-expansion-panel  style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                            <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                            <mat-panel-title >\n                                                            <h4 style=\"color: #366e86;\"> Packages</h4>\n                    \n                                                            </mat-panel-title>\n                                                          \n                                                            </mat-expansion-panel-header>\n  \n                                                      <div class=\"card tb\" >\n                                                        <div class=\"table-responsive\">\n                                                            <table class=\"table table-striped\" id=\"packagetb\"  style=\"display: none;\">\n                                                                <thead>\n                                                                  <tr>\n                                                                    <th scope=\"col1\">Package Name</th>\n                                                                    <th scope=\"col1\">Unit Price</th>\n                                                                    <th scope=\"col1\">Service Center </th>\n                                                                    <th scope=\"col1\">Actions</th>\n                                                                  \n                                                                  </tr>\n                                                                  \n                                                              \n                                                                </thead>\n                                                              <tbody>\n                                                                \n                                                              </tbody>\n                                                            </table></div></div>\n                                                            </mat-expansion-panel></div>\n                                                      \n\n                                                          <div id=\"exp4\" style=\"display: none !important;\"> \n\n\n                                                              <mat-expansion-panel style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                                  <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                                  <mat-panel-title >\n                                                                  <h4 style=\"color: #366e86;\"> Direct</h4>\n                          \n                                                                  </mat-panel-title>\n                                                                \n                                                                  </mat-expansion-panel-header>\n  \n                                                            <div class=\"card tb\">\n                                                              <div class=\"table-responsive\">\n                                                                  <table class=\"table table-striped\" id=\"directtb\" style=\"display: none;\">\n                                                                      <thead>\n                                                                        <tr>\n                                                                          <th scope=\"col1\">Service Name</th>\n                                                                          <th scope=\"col1\">Attached to Service</th>\n                                                                          <th scope=\"col1\">QTY</th>\n                                                                          <th scope=\"col1\">Unit Price</th>\n                                                                          <th scope=\"col1\">Total Price</th>\n                                                                          <th scope=\"col1\">Priority</th>\n                                                                          <th scope=\"col1\">Service Center</th>\n                                                                           <th scope=\"col1\">Actions</th>\n                                                                        </tr>\n                                                                        \n                                                                    \n                                                                      </thead>\n                                                                    <tbody>\n  \n                                                                    </tbody>\n                                                                  </table></div></div>\n                                                                  </mat-expansion-panel></div>\n                                                             \n                                                                <div id=\"exp5\" style=\"display: none !important;\"> \n\n\n                                                                    <mat-expansion-panel style=\"background-color: transparent !important;box-shadow: none !important;\">\n                                                                        <mat-expansion-panel-header style=\"border-bottom: 1.3px solid #366e86;border-radius: 0px;\">\n                                                                        <mat-panel-title >\n                                                                        <h4 style=\"color: #366e86;\"> Oder Set</h4>\n                                \n                                                                        </mat-panel-title>\n                                                                      \n                                                                        </mat-expansion-panel-header>\n                                                                  <div class=\"card tb\" >\n                                                                    <div class=\"table-responsive\">\n                                                                        <table class=\"table table-striped\" id=\"ordertb\" style=\"display: none;\">\n                                                                            <thead>\n                                                                              <tr>\n                                                                                <th scope=\"col1\">Material Name</th>\n                                                                                <th scope=\"col1\">QTY</th>\n                                                                                <th scope=\"col1\">Actions</th>\n                                                                              </tr>\n                                                                              \n                                                                          \n                                                                            </thead>\n                                                                          <tbody>\n                                                                             \n                                                                          </tbody>\n                                                                        </table></div></div>  </mat-expansion-panel></div> </mat-accordion>\n  \n                                                          </div>\n                                                       \n                                              </div>\n\n\n                                     \n        \n                          </div>\n                         \n                            \n                                                <!-- </div> -->\n                                      \n                <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n                <script src=\"js/material.js\"></script>\n                <!-- Bootstrap tooltips -->\n                <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js\"></script>\n                <!-- Bootstrap core JavaScript -->\n                <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n                <!-- MDB core JavaScript -->\n                <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.8/js/mdb.min.js\"></script>\n                <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n                <!-- Include all compiled plugins (below), or include individual files as needed -->\n                <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vitals/vitals.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vitals/vitals.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"container-fluid\">\n        <!-- <h2 style=\"color: #366e86;\">Vitals</h2><hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n      \n         <br/> -->\n        <!-- <div class=\"space2\"></div>\n       -->\n            <div id=\"vitals-section\" class=\"row\" style=\"margin-top: 10px;\">\n            <!-- LEFT Container -->\n\n\n\n            <div class=\"col-md-3\">\n                    <h4 style=\"color: #366e86;\"> Vital Signs</h4>\n                    <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n\n                    <div class=\"hero-message\">\n\n                            <li class=\"list-group-item lgi-custom selected\" data-target=\"general-vitals\" ng-click=\"myFunc()\" style=\"margin-top: 10px;\">General Vitals</li>\n                    </div>\n                    <div class=\"hero-message\">\n\n                            <li class=\"list-group-item lgi-custom\" data-target=\"cardiac-vitals\">Cardiac Vitals</li>\n                        </div>\n                    <div class=\"hero-message\">\n\n                            <li class=\"list-group-item lgi-custom\" data-target=\"pediatric-vitals\">Pediatric Vitals</li>\n                    </div>\n                    <div class=\"hero-message\">\n\n                            <li class=\"list-group-item lgi-custom\" data-target=\"er-vitals\">ER Vitals</li>\n                    </div>\n                    <div class=\"hero-message\">\n\n                            <li class=\"list-group-item lgi-custom\" data-target=\"ot-parameters\">OT Parameters</li>\n                    </div>\n\n                        <!-- <div class=\"hero-message\"> \n                                <h5 style=\"color: #366e86;\"> Vital Signs</h5>\n                                <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/>\n                    <ul class=\"list-group list-group-flush\" style=\"padding:10px;\">\n                        <li class=\"list-group-item lgi-custom selected\" data-target=\"general-vitals\" ng-click=\"myFunc()\">General Vitals</li>\n                        <li class=\"list-group-item lgi-custom\" data-target=\"cardiac-vitals\">Cardiac Vitals</li>\n                        <li class=\"list-group-item lgi-custom\" data-target=\"pediatric-vitals\">Pediatric Vitals</li>\n                        <li class=\"list-group-item lgi-custom\" data-target=\"er-vitals\">ER Vitals</li>\n                        <li class=\"list-group-item lgi-custom\" data-target=\"ot-parameters\">OT Parameters</li>\n                    </ul>\n                </div> -->\n            </div>\n            \n        \n  \n            <div class=\"col-md-7\" >\n                   \n                <div id=\"general-vitals\" >\n                    <!-- <div class=\"card-header container-fluid\"> -->\n                        \n                            <h4 style=\"color: #366e86;\"> General Vitals</h4> \n                            <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/><br/>\n                          \n                    <!-- </div> -->\n                    \n                    <div class=\"card tb\" >\n                        <div class=\"table-responsive\">\n                            <div class=\"col-md-12\">\n                        <table class=\"table table-striped\">\n                            <tr class=\"d-flex\">\n                                <td class=\"col-sm-3 col-md-3 col-lg-3\">\n                                        <mat-form-field class=\"form-sm\" style=\"\">\n                                                <input matInput placeholder=\"Height (cm)\" type=\"number\" id=\"general-vitals-height\"\n                                                class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                                </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Weight (kg)\" type=\"number\" id=\"general-vitals-weight\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                            </mat-form-field>\n                                            <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Temperature (F)\" type=\"number\" id=\"general-vitals-height\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                              </mat-form-field>\n                                              <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                <input matInput placeholder=\"Systolic BP(mm Hg)\" type=\"number\" id=\"general-vitals-bp-systolic\"\n                                                 class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                                </mat-form-field>\n                                              <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                  <input matInput placeholder=\"Diastolic BP(mm Hg)\" type=\"number\" id=\"general-vitals-bp-diastolic\"\n                                                   class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                                  </mat-form-field>\n                                              <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                    <input matInput placeholder=\"Pulse Rate \" type=\"number\" id=\"general-vitals-pulse\"\n                                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                                 </mat-form-field>\n                                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                    <input matInput placeholder=\"Pulse Rate \" type=\"number\" id=\"general-vitals-pulse\"\n                                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                                </mat-form-field>\n                                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                  <input matInput placeholder=\"Respiratory Rate \" type=\"number\" id=\"general-vitals-rr\"\n                                                   class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                              </mat-form-field>\n  \n                                              <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                                <input matInput placeholder=\"SPO2 (%)\" type=\"number\"  id=\"general-vitals-spo2\"\n                                                 class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                            </mat-form-field>\n                                            <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Pain Score\" type=\"number\"  id=\"general-vitals-pain-score\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Pain Acuity\" type=\"text\"  id=\"general-vitals-pain-acuity\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                          <input matInput placeholder=\"Pain Character\" type=\"text\"  id=\"general-vitals-pain-character\"\n                                           class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                      </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Pain Location\" type=\"text\"  id=\"general-vitals-pain-location\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"BMI (%)\" type=\"number\"  id=\"general-vitals-bmi\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n                                 \n                                </td>\n  \n                                <!-- <td class=\"col-sm-1 col-md-1 col-lg-1\">\n  \n  \n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Normal\" class=\"fas fa-check-circle\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                 \n  \n                                </td>\n   -->\n                                <td class=\"col-sm-9 col-md-9 col-lg-9\">\n  \n  \n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"general-vitals-height-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-weight-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-temperature-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-bp-systolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-bp-diastolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-pulse-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"   id=\"general-vitals-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-spo2-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-pain-score-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"general-vitals-pain-acuity-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"general-vitals-pain-character-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"general-vitals-pain-location-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"general-vitals-bmi-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n  \n                                </td>\n  \n                            </tr>\n                        </table></div></div>\n                    </div>\n                </div>\n                \n                <div id=\"cardiac-vitals\" class=\" card-details bg-info card-accent-colored\" style=\"display: none;\">\n                        <h4 style=\"color: #366e86;\">Cardiac Vitals</h4> \n                        <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/><br/>\n                   \n                    \n                    <div class=\"card tb\">\n                            <div class=\"table-responsive\">\n                        <table class=\"table borderless\">\n                            <tr class=\"d-flex\">\n                                <td class=\"col-sm-3 col-md-3 col-lg-3\">\n  \n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Height (cm)\" type=\"number\" id=\"cardiac-vitals-height\"\n                                        class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                    <input matInput placeholder=\"Weight (kg)\" type=\"number\" id=\"cardiac-vitals-weight\"\n                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Temperature (F)\" type=\"number\" id=\"cardiac-vitals-temperature\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                      </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Systolic BP(mm Hg)\" type=\"number\" id=\"cardiac-vitals-bp-systolic\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                          <input matInput placeholder=\"Diastolic BP(mm Hg)\" type=\"number\"  id=\"cardiac-vitals-bp-diastolic\"\n                                           class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Respiratory Rate \" type=\"number\" id=\"cardiac-vitals-rr\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"SPO2 (%)\" type=\"number\"  id=\"cardiac-vitals-spo2\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                         </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Pain Score 1\" type=\"number\" id=\"cardiac-vitals-pain-score\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                         <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"GRBS\" type=\"number\"  id=\"cardiac-vitals-grbs\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"BMI (%)\" type=\"number\"  id=\"cardiac-vitals-bmi\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n  \n  \n  \n                                </td>\n  \n                                <!-- <td class=\"col-sm-1 col-md-1 col-lg-1\">\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                  \n  \n                                </td>\n   -->\n                                <td class=\"col-sm-9 col-md-9 col-lg-9\">\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"cardiac-vitals-height-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-weight-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-temperature-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-bp-systolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"cardiac-vitals-bp-diastolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-pulse-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-spo2-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"cardiac-vitals-pain-score-remarks\" \n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"cardiac-vitals-pain-acuity-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                </td>\n  \n                            </tr>\n                        </table></div>\n                    </div>\n                </div>\n  \n                <div id=\"pediatric-vitals\" class=\" card-details bg-info card-accent-colored\" style=\"display: none;\">\n                        <h4 style=\"color: #366e86;\">  Pediatric Vitals</h4> \n                        <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/><br/>\n                 \n                    \n                    <div class=\"card tb\">\n                            <div class=\"table-responsive\">\n                        <table class=\"table borderless\">\n                            <tr class=\"d-flex\">\n                                <td class=\"col-sm-3 col-md-3 col-lg-3\">\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Height (cm)\" type=\"number\" id=\"pediatric-vitals-height\"\n                                        class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                    <input matInput placeholder=\"Weight (kg)\" type=\"number\" id=\"pediatric-vitals-weight\"\n                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Temperature (F)\" type=\"number\" id=\"pediatric-vitals-temperature\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                      </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Systolic BP(mm Hg)\" type=\"number\" id=\"pediatric-vitals-bp-systolic\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                          <input matInput placeholder=\"Diastolic BP(mm Hg)\" type=\"number\"  id=\"pediatric-vitals-bp-diastolic\"\n                                           class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Respiratory Rate \" type=\"number\" id=\"pediatric-vitals-rr\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"SPO2 (%)\" type=\"number\"  id=\"pediatric-vitals-spo2\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                         </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Pain Score 1\" type=\"number\" id=\"pediatric-vitals-pain-score\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Abdominal Girth (cm)\" type=\"number\"  id=\"pediatric-vitals-abdominal-girth\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                           <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"GRBS\" type=\"number\"  id=\"pediatric-vitals-grbs\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"BMI (%)\" type=\"number\"  id=\"pediatric-vitals-bmi\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n  \n                                </td>\n  \n                                <!-- <td class=\"col-sm-1 col-md-1 col-lg-1\">\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n  \n                                </td> -->\n  \n                                <td class=\"col-sm-9 col-md-9 col-lg-9\">\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"pediatric-vitals-height-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"pediatric-vitals-weight-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-temperature-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-bp-diastolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"pediatric-vitals-pulse-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-spo2-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"pediatric-vitals-pain-score-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-pain-acuity-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"pediatric-vitals-bmi-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n  \n                                </td>\n  \n                            </tr>\n                        </table>\n                    </div></div>\n                </div>\n  \n                <div id=\"er-vitals\" class=\" card-details bg-info card-accent-colored\" style=\"display: none;\">\n                        <h4 style=\"color: #366e86;\">     ER Vitals</h4> \n                        <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/><br/>\n                 \n                    \n                    <div class=\"card tb\">\n                            <div class=\"table-responsive\">\n                        <table class=\"table borderless\">\n                            <tr class=\"d-flex\">\n                                <td class=\"col-sm-3 col-md-3 col-lg-3\">\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Height (cm)\" type=\"number\" id=\"er-vitals-height\"\n                                        class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                    <input matInput placeholder=\"Weight (kg)\" type=\"number\" id=\"er-vitals-weight\"\n                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Temperature (F)\" type=\"number\" id=\"er-vitals-temperature\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                      </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Systolic BP(mm Hg)\" type=\"number\" id=\"er-vitals-bp-systolic\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                          <input matInput placeholder=\"Diastolic BP(mm Hg)\" type=\"number\"  id=\"er-vitals-bp-diastolic\"\n                                           class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Pulse Rate \" type=\"number\" id=\"er-vitals-pulse\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Respiratory Rate \" type=\"number\"  id=\"er-vitals-rr\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                         </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"SPO2 (%)\" type=\"number\" id=\"er-vitals-spo2\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Pain Score 1\" type=\"number\"  id=\"er-vitals-pain-score\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                           <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"GRBS\" type=\"number\"  id=\"er-vitals-grbs\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"BMI (%)\" type=\"number\"  id=\"er-vitals-bmi\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n  \n                                </td>\n  \n                                <!-- <td class=\"col-sm-1 col-md-1 col-lg-1\">\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                   \n  \n                                </td> -->\n  \n                                <td class=\"col-sm-9 col-md-9 col-lg-9\">\n  \n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"er-vitals-height-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"er-vitals-weight-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-temperature-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-bp-systolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"er-vitals-bp-diastolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"er-vitals-pulse-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-spo2-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"er-vitals-pain-score-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-pain-acuity-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"er-vitals-bmi-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                </td>\n  \n                            </tr>\n                        </table>\n                    </div>\n                </div></div>\n  \n                <div id=\"ot-parameters\" class=\" card-details bg-info card-accent-colored\" style=\"display: none;\">\n                        <h4 style=\"color: #366e86;\">OT Parameters</h4> \n                        <hr style=\"background-color: #366e86;border: 0 none;color: #366e86;height: 1.3px;\"/><br/>\n                  \n                    \n                    <div class=\"card tb\">\n                            <div class=\"table-responsive\">\n                        <table class=\"table borderless\">\n                            <tr class=\"d-flex\">\n                                <td class=\"col-sm-3 col-md-3 col-lg-3\">\n                                    \n  \n  \n                                   \n                                <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                    <input matInput placeholder=\"Weight (kg)\" type=\"number\" id=\"ot-parameters-weight\"\n                                     class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Pain Score\" type=\"number\" id=\"er-vitals-temperature\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                      </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Temperature (F)\" type=\"number\" id=\"ot-parameters-temperature\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                          <input matInput placeholder=\"Systolic BP(mm Hg)\" type=\"number\"  id=\"ot-parameters-bp-systolic\"\n                                           class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Diastolic BP(mm Hg)\" type=\"number\" id=\"ot-parameters-bp-diastolic\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                              <input matInput placeholder=\"Pulse Rate \" type=\"number\" id=\"ot-parameters-pulse\"\n                                               class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                          </mat-form-field>\n                                      <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Respiratory Rate \" type=\"number\" id=\"ot-parameters-rr\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                         </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"SPO2 (%)\" type=\"number\" id=\"ot-parameters-spo2\"\n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                        <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                            <input matInput placeholder=\"Blood Transfusion\" type=\"number\"  id=\"ot-parameters-blood-transfusion\" \n                                             class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                        </mat-form-field>\n                                           <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Bowels\" type=\"number\"  id=\"ot-parameters-bowels\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Bladder\" type=\"number\"  id=\"ot-parameters-bladder\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                      <input matInput placeholder=\"Diet\" type=\"number\"  id=\"ot-parameters-diet\"\n                                       class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                  </mat-form-field>\n                                </td>\n  \n                                <!-- <td class=\"col-sm-1 col-md-1 col-lg-1\">\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"Low\" class=\"fas fa-arrow-alt-circle-down\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                    <div class=\"md-form form-sm\">\n                                        <input type=\"text\" class=\"hideThis form-control form-control-sm\">\n                                        <label class=\"badge-value-indic\"><i title=\"High\" class=\"fas fa-arrow-alt-circle-up\"></i></label>\n                                    </div>\n                                  \n  \n                                </td> -->\n  \n                                <td class=\"col-sm-9 col-md-9 col-lg-9\">\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"ot-parameters-height-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"ot-parameters-weight-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-temperature-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-bp-systolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"ot-parameters-bp-diastolic-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"ot-parameters-pulse-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-rr-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-spo2-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-pain-score-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\" id=\"ot-parameters-pain-acuity-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-pain-character-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"form-sm\" style=\"width: 100% !important;\">\n                                        <input matInput placeholder=\"Remarks\" type=\"text\"  id=\"ot-parameters-pain-location-remarks\"\n                                         class=\"form-control form-control-sm gen-vital\" data-min=\"0\" data-max=\"300\">\n                                    </mat-form-field>\n  \n  \n                                </td>\n  \n                            </tr>\n                        </table></div>\n                    </div>\n                </div>\n  \n  \n  \n            </div><!--Column ends here -->\n  \n            </div>\n  \n    </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/allergy/allergy.component.css":
/*!***********************************************!*\
  !*** ./src/app/allergy/allergy.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@media only screen and (max-width: 600px){\r\n    table th{\r\n\r\n        font-size :13px !important;\r\n      }\r\nh3{\r\n    font-size: 23px;\r\n    margin-top: 7px !important;\r\n}\r\n\r\nh3.tp{\r\n\r\n    margin-top: -14px !important;    \r\n}\r\n    button.button.glass.blue-a {\r\n        padding: 0px 5px;\r\n        position: absolute;\r\n        top: -41px;\r\n        right: 23px;\r\n    }\r\n#allergy-section{\r\n    margin-left: 4px;\r\n}\r\n.card-body{\r\n    max-height: 10rem !important; \r\n    overflow: auto;\r\n    color: white;\r\n}\r\n.hero-message::before {\r\n    min-width: 92% !important;\r\n    content: \"\" !important;\r\n    display: block !important;\r\n    position: absolute !important;\r\n    margin-left: 0px;\r\n    border-radius: 4px;\r\n    height: 13rem !important;\r\n    z-index: -1 !important;\r\n    opacity: 0.5;\r\n    background-color: #006894;\r\n    }\r\n\r\n}\r\n\r\nmat-form-field{\r\n    width: 100% !important;\r\n    \r\n    margin-bottom: -6px;\r\n   margin-left: 5px;\r\n   margin-right: 5px !important;\r\n}\r\n\r\n#allergydtl{\r\n    padding-top: -18px !important;\r\n    padding-right: 10px\r\n}\r\n\r\n.card.tb{\r\n    opacity: 0.6;\r\n    background:linear-gradient(160deg,#006894,#006894)!important;\r\n}\r\n\r\n.hero-message::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    margin-left: 0px;\r\n    min-width: 91.1%;\r\n    border-radius: 4px;\r\n    height: 26.5rem;\r\n    z-index: -1;\r\n    opacity: 0.5;\r\n    background-color: #006894;\r\n    }\r\n\r\n.card-body{\r\n    max-height: 21.3rem; \r\n    overflow: auto;\r\n    color: white;\r\n}\r\n\r\n.mat-select-value{\r\n    color: white !important;\r\n}\r\n\r\n::-webkit-scrollbar { \r\n    display: none; \r\n    }\r\n\r\nh4{\r\n        padding-top: 10px;\r\n      \r\n        padding-left: 16px;\r\n    }\r\n\r\n.button {\r\n    color:rgba(183, 245, 245, 0.84);\r\n    text-shadow: 0px 1px #000;\r\n    font-size: 15px;\r\n    margin-top: 7px;\r\n    text-decoration:none;\r\n\r\n    padding: 0.1em 0.6em;\r\n\r\n    cursor: pointer;\r\n    overflow: visible;\r\n\r\n    border-radius: 3px;\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    transition: all 0.1s ease-in-out;\r\n  \r\n    outline: 0;\r\n}\r\n\r\n.glass {\r\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYwNjc2OCIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KICAgIDxzdG9wIG9mZnNldD0iMyUiIHN0b3AtY29sb3I9IiNiYmJiYmIiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjI3JSIgc3RvcC1jb2xvcj0iI2JiYmJiYiIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KICAgIDxzdG9wIG9mZnNldD0iMjglIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogICAgPHN0b3Agb2Zmc2V0PSI3MyUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CiAgICA8c3RvcCBvZmZzZXQ9Ijg4JSIgc3RvcC1jb2xvcj0iIzRiNTA1MSIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KICAgIDxzdG9wIG9mZnNldD0iOTclIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+); /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */ /* IE10+ */\r\n    background: linear-gradient(to bottom,  rgba(96,103,104,0.3) 0%,rgba(187,187,187,0.3) 3%,rgba(187,187,187,0.3) 27%,rgba(0,0,0,0.3) 28%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.3) 73%,rgba(75,80,81,0.3) 88%,rgba(0,0,0,0.3) 97%,rgba(0,0,0,0.3) 100%); /* W3C */\r\n\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    -o-border-image: none;\r\n       border-image: none;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n  \r\n    box-shadow:\r\n      0 1px 0 0 rgba(255, 255, 255, 0.4) inset,\r\n      0 2px 6px rgba(0, 0, 0, 0.5),\r\n      0 10px rgba(0, 0, 0, 0.05) inset;\r\n}\r\n\r\nbutton:active {\r\n    margin-left: 2px;\r\n    margin-right: -2px;\r\n}\r\n\r\nbutton:active.blue-a {\r\n    transition: none !important; \r\n \r\n}\r\n\r\n.blue-a {\r\n    color: rgb(67, 195, 199);\r\n    background-color: rgba(67, 195, 199, 0.28);\r\n}\r\n\r\nbutton:hover.blue-a {\r\n    color: rgba(230, 240, 255, 0.99);\r\n    /* text-shadow: 0px 0px 2px rgba(230, 240, 255, 0.99), 0px 0px 4px rgba(200, 230, 255, 0.99); */\r\n    border-color: rgba(120, 200, 255, 0.4);\r\n    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.4) inset, 0 2px 6px rgba(0, 0, 0, 0.5), 0 10px rgba(0, 0, 0, 0.05) inset, 0 0px 5px 2px rgba(79, 216, 220, 0.83), 0 0px 10px 2px rgba(67, 195, 199, 0.74) inset;\r\n\r\n}\r\n\r\nbutton:active.blue-a {\r\n    color: rgba(230, 240, 255, 0.99);\r\n\r\n    border-color: rgba(120, 200, 255, 0.6) !important;\r\n    -o-border-image: none;\r\n       border-image: none;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n\r\n    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.4) inset, 0 2px 6px rgba(0, 0, 0, 0.5), 0 10px rgba(0, 0, 0, 0.05) inset, 0 0px 5px 2px rgba(79, 216, 220, 0.83), 0 0px 10px 2px rgba(67, 195, 199, 0.74) inset;\r\n\r\n    background:  url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNzUlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3OGM4ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzhjOGZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxyZWN0IHg9Ii01MCIgeT0iLTUwIiB3aWR0aD0iMTAxIiBoZWlnaHQ9IjEwMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+); /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 12+ */ /* IE10+ */\r\n    background: radial-gradient(ellipse at center,  rgba(120, 200, 255,1) 0%,rgba(120, 200, 255,0) 100%); /* W3C */\r\n}\r\n\r\n.container-fluid{\r\n    -webkit-animation: scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n    animation: scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  }\r\n\r\n@-webkit-keyframes scale-up-center{0%{transform:scale(.5)}100%{transform:scale(1)}}\r\n\r\n@keyframes scale-up-center{0%{transform:scale(.5)}100%{transform:scale(1)}}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJneS9hbGxlcmd5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7O1FBRUksMEJBQTBCO01BQzVCO0FBQ047SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQztJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0ksc0JBQXNCOztJQUV0QixtQkFBbUI7R0FDcEIsZ0JBQWdCO0dBQ2hCLDRCQUE0QjtBQUMvQjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QjtBQUNKOztBQUNBO0lBQ0ksWUFBWTtJQUNaLDREQUE0RDtBQUNoRTs7QUFHQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qjs7QUFDSjtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7SUFDYjs7QUFDQTtRQUNJLGlCQUFpQjs7UUFFakIsa0JBQWtCO0lBQ3RCOztBQUVKO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjs7SUFFcEIsb0JBQW9COztJQUVwQixlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUt2QixnQ0FBZ0M7O0lBRWhDLFVBQVU7QUFDZDs7QUFFQTtFQUNFLCtxQ0FBK3FDLEVBcUIxN0IseUJBQXlCLEVBQzlCLGlCQUFpQixFQUNoQixVQUFVO0lBQ3pQLCtPQUErTyxFQUFFLFFBQVE7O0lBRXpQLGdDQUFnQztJQUNoQyxxQkFBa0I7T0FBbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCOzs7c0NBR2tDO0FBQ3RDOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUtJLDJCQUEyQjs7QUFFL0I7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLCtGQUErRjtJQUMvRixzQ0FBc0M7SUFDdEMsMk1BQTJNOztBQUUvTTs7QUFFQTtJQUNJLGdDQUFnQzs7SUFFaEMsaURBQWlEO0lBQ2pELHFCQUFrQjtPQUFsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIsMk1BQTJNOztJQUUzTSxvcUJBQW9xQixFQUN2akIsV0FBVyxFQUN3QyxvQkFBb0IsRUFDdEUseUJBQXlCLEVBQzlCLGNBQWMsRUFDVCxVQUFVO0lBQ3hILG9HQUFvRyxFQUFFLFFBQVE7QUFDbEg7O0FBQ0E7SUFDSSx1RkFBdUY7SUFDdkYsK0VBQStFO0VBQ2pGOztBQUVGLG1DQUFtQyxHQUErQixtQkFBbUIsQ0FBQyxLQUFnQyxrQkFBa0IsQ0FBQzs7QUFBQywyQkFBMkIsR0FBK0IsbUJBQW1CLENBQUMsS0FBZ0Msa0JBQWtCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hbGxlcmd5L2FsbGVyZ3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIHRhYmxlIHRoe1xyXG5cclxuICAgICAgICBmb250LXNpemUgOjEzcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi10b3A6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMy50cHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweCAhaW1wb3J0YW50OyAgICBcclxufVxyXG4gICAgYnV0dG9uLmJ1dHRvbi5nbGFzcy5ibHVlLWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTQxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcbiNhbGxlcmd5LXNlY3Rpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50OyBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZXJvLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICBtaW4td2lkdGg6IDkyJSAhaW1wb3J0YW50O1xyXG4gICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogMTNyZW0gIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ODk0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG4gICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiNhbGxlcmd5ZHRse1xyXG4gICAgcGFkZGluZy10b3A6IC0xOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4XHJcbn1cclxuLmNhcmQudGJ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNjBkZWcsIzAwNjg5NCwjMDA2ODk0KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaGVyby1tZXNzYWdlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1pbi13aWR0aDogOTEuMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDI2LjVyZW07XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY4OTQ7XHJcbiAgICB9XHJcbi5jYXJkLWJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMS4zcmVtOyBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbi5idXR0b24ge1xyXG4gICAgY29sb3I6cmdiYSgxODMsIDI0NSwgMjQ1LCAwLjg0KTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjZlbTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICBcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlBL1BnbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakV3TUNVaUlHaGxhV2RvZEQwaU1UQXdKU0lnZG1sbGQwSnZlRDBpTUNBd0lERWdNU0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWJtOXVaU0krQ2lBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSm5jbUZrTFhWaloyY3RaMlZ1WlhKaGRHVmtJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJakFsSWlCNU1UMGlNQ1VpSUhneVBTSXdKU0lnZVRJOUlqRXdNQ1VpUGdvZ0lDQWdQSE4wYjNBZ2IyWm1jMlYwUFNJd0pTSWdjM1J2Y0MxamIyeHZjajBpSXpZd05qYzJPQ0lnYzNSdmNDMXZjR0ZqYVhSNVBTSXdMak1pTHo0S0lDQWdJRHh6ZEc5d0lHOW1abk5sZEQwaU15VWlJSE4wYjNBdFkyOXNiM0k5SWlOaVltSmlZbUlpSUhOMGIzQXRiM0JoWTJsMGVUMGlNQzR6SWk4K0NpQWdJQ0E4YzNSdmNDQnZabVp6WlhROUlqSTNKU0lnYzNSdmNDMWpiMnh2Y2owaUkySmlZbUppWWlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3TGpNaUx6NEtJQ0FnSUR4emRHOXdJRzltWm5ObGREMGlNamdsSWlCemRHOXdMV052Ykc5eVBTSWpNREF3TURBd0lpQnpkRzl3TFc5d1lXTnBkSGs5SWpBdU15SXZQZ29nSUNBZ1BITjBiM0FnYjJabWMyVjBQU0kzTXlVaUlITjBiM0F0WTI5c2IzSTlJaU13TURBd01EQWlJSE4wYjNBdGIzQmhZMmwwZVQwaU1DNHpJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpnNEpTSWdjM1J2Y0MxamIyeHZjajBpSXpSaU5UQTFNU0lnYzNSdmNDMXZjR0ZqYVhSNVBTSXdMak1pTHo0S0lDQWdJRHh6ZEc5d0lHOW1abk5sZEQwaU9UY2xJaUJ6ZEc5d0xXTnZiRzl5UFNJak1EQXdNREF3SWlCemRHOXdMVzl3WVdOcGRIazlJakF1TXlJdlBnb2dJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhNREFsSWlCemRHOXdMV052Ykc5eVBTSWpNREF3TURBd0lpQnpkRzl3TFc5d1lXTnBkSGs5SWpBdU15SXZQZ29nSUR3dmJHbHVaV0Z5UjNKaFpHbGxiblErQ2lBZ1BISmxZM1FnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWpFaUlHaGxhV2RvZEQwaU1TSWdabWxzYkQwaWRYSnNLQ05uY21Ga0xYVmpaMmN0WjJWdVpYSmhkR1ZrS1NJZ0x6NEtQQzl6ZG1jKyk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsXHJcbiAgICAgIHJnYmEoOTYsMTAzLDEwNCwwLjMpIDAlLFxyXG4gICAgICByZ2JhKDE4NywxODcsMTg3LDAuMykgMyUsXHJcbiAgICAgIHJnYmEoMTg3LDE4NywxODcsMC4zKSAyNyUsXHJcbiAgICAgIHJnYmEoMCwwLDAsMC4zKSAyOCUsXHJcbiAgICAgIHJnYmEoMCwwLDAsMC4zKSA2MCUsXHJcbiAgICAgIHJnYmEoMCwwLDAsMC4zKSA3MyUsXHJcbiAgICAgIHJnYmEoNzUsODAsODEsMC4zKSA4OCUsXHJcbiAgICAgIHJnYmEoMCwwLDAsMC4zKSA5NyUsXHJcbiAgICAgIHJnYmEoMCwwLDAsMC4zKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sXHJcbiAgICAgIGNvbG9yLXN0b3AoMCUscmdiYSg5NiwxMDMsMTA0LDAuMykpLFxyXG4gICAgICBjb2xvci1zdG9wKDMlLHJnYmEoMTg3LDE4NywxODcsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoMjclLHJnYmEoMTg3LDE4NywxODcsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoMjglLHJnYmEoMCwwLDAsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoNjAlLHJnYmEoMCwwLDAsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoNzMlLHJnYmEoMCwwLDAsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoODglLHJnYmEoNzUsODAsODEsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoOTclLHJnYmEoMCwwLDAsMC4zKSksXHJcbiAgICAgIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDAsMCwwLDAuMykpKTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDk2LDEwMywxMDQsMC4zKSAwJSxyZ2JhKDE4NywxODcsMTg3LDAuMykgMyUscmdiYSgxODcsMTg3LDE4NywwLjMpIDI3JSxyZ2JhKDAsMCwwLDAuMykgMjglLHJnYmEoMCwwLDAsMC4zKSA2MCUscmdiYSgwLDAsMCwwLjMpIDczJSxyZ2JhKDc1LDgwLDgxLDAuMykgODglLHJnYmEoMCwwLDAsMC4zKSA5NyUscmdiYSgwLDAsMCwwLjMpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoOTYsMTAzLDEwNCwwLjMpIDAlLHJnYmEoMTg3LDE4NywxODcsMC4zKSAzJSxyZ2JhKDE4NywxODcsMTg3LDAuMykgMjclLHJnYmEoMCwwLDAsMC4zKSAyOCUscmdiYSgwLDAsMCwwLjMpIDYwJSxyZ2JhKDAsMCwwLDAuMykgNzMlLHJnYmEoNzUsODAsODEsMC4zKSA4OCUscmdiYSgwLDAsMCwwLjMpIDk3JSxyZ2JhKDAsMCwwLDAuMykgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDk2LDEwMywxMDQsMC4zKSAwJSxyZ2JhKDE4NywxODcsMTg3LDAuMykgMyUscmdiYSgxODcsMTg3LDE4NywwLjMpIDI3JSxyZ2JhKDAsMCwwLDAuMykgMjglLHJnYmEoMCwwLDAsMC4zKSA2MCUscmdiYSgwLDAsMCwwLjMpIDczJSxyZ2JhKDc1LDgwLDgxLDAuMykgODglLHJnYmEoMCwwLDAsMC4zKSA5NyUscmdiYSgwLDAsMCwwLjMpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoOTYsMTAzLDEwNCwwLjMpIDAlLHJnYmEoMTg3LDE4NywxODcsMC4zKSAzJSxyZ2JhKDE4NywxODcsMTg3LDAuMykgMjclLHJnYmEoMCwwLDAsMC4zKSAyOCUscmdiYSgwLDAsMCwwLjMpIDYwJSxyZ2JhKDAsMCwwLDAuMykgNzMlLHJnYmEoNzUsODAsODEsMC4zKSA4OCUscmdiYSgwLDAsMCwwLjMpIDk3JSxyZ2JhKDAsMCwwLDAuMykgMTAwJSk7IC8qIFczQyAqL1xyXG5cclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIFxyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSBpbnNldCxcclxuICAgICAgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkgaW5zZXQ7XHJcbn1cclxuXHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XHJcbn1cclxuYnV0dG9uOmFjdGl2ZS5ibHVlLWEge1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsgXHJcbiBcclxufVxyXG4uYmx1ZS1hIHtcclxuICAgIGNvbG9yOiByZ2IoNjcsIDE5NSwgMTk5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDE5NSwgMTk5LCAwLjI4KTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyLmJsdWUtYSB7XHJcbiAgICBjb2xvcjogcmdiYSgyMzAsIDI0MCwgMjU1LCAwLjk5KTtcclxuICAgIC8qIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDIzMCwgMjQwLCAyNTUsIDAuOTkpLCAwcHggMHB4IDRweCByZ2JhKDIwMCwgMjMwLCAyNTUsIDAuOTkpOyAqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMCwgMjAwLCAyNTUsIDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIGluc2V0LCAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSBpbnNldCwgMCAwcHggNXB4IDJweCByZ2JhKDc5LCAyMTYsIDIyMCwgMC44MyksIDAgMHB4IDEwcHggMnB4IHJnYmEoNjcsIDE5NSwgMTk5LCAwLjc0KSBpbnNldDtcclxuXHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUuYmx1ZS1hIHtcclxuICAgIGNvbG9yOiByZ2JhKDIzMCwgMjQwLCAyNTUsIDAuOTkpO1xyXG5cclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMjAsIDIwMCwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSBpbnNldCwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkgaW5zZXQsIDAgMHB4IDVweCAycHggcmdiYSg3OSwgMjE2LCAyMjAsIDAuODMpLCAwIDBweCAxMHB4IDJweCByZ2JhKDY3LCAxOTUsIDE5OSwgMC43NCkgaW5zZXQ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQS9QZ284YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2QybGtkR2c5SWpFd01DVWlJR2hsYVdkb2REMGlNVEF3SlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREVnTVNJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGlibTl1WlNJK0NpQWdQSEpoWkdsaGJFZHlZV1JwWlc1MElHbGtQU0puY21Ga0xYVmpaMmN0WjJWdVpYSmhkR1ZrSWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZM2c5SWpVd0pTSWdZM2s5SWpVd0pTSWdjajBpTnpVbElqNEtJQ0FnSUR4emRHOXdJRzltWm5ObGREMGlNQ1VpSUhOMGIzQXRZMjlzYjNJOUlpTTNPR000Wm1ZaUlITjBiM0F0YjNCaFkybDBlVDBpTVNJdlBnb2dJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhNREFsSWlCemRHOXdMV052Ykc5eVBTSWpOemhqT0dabUlpQnpkRzl3TFc5d1lXTnBkSGs5SWpBaUx6NEtJQ0E4TDNKaFpHbGhiRWR5WVdScFpXNTBQZ29nSUR4eVpXTjBJSGc5SWkwMU1DSWdlVDBpTFRVd0lpQjNhV1IwYUQwaU1UQXhJaUJvWldsbmFIUTlJakV3TVNJZ1ptbHNiRDBpZFhKc0tDTm5jbUZrTFhWaloyY3RaMlZ1WlhKaGRHVmtLU0lnTHo0S1BDOXpkbWMrKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYigxMjQsIDIxMywgMjQwKSAwJSwgcmdiYSgxMjAsIDIwMCwgMjU1LDApIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSg3OSwgMjE2LCAyMjAsIDAuODMpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMTIwLCAyMDAsIDI1NSwwKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYig3OCwgMjA0LCAyMjYpIDAlLHJnYmEoMTIwLCAyMDAsIDI1NSwwKSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2IoNzgsIDIwNCwgMjI2KSAwJSxyZ2JhKDEyMCwgMjAwLCAyNTUsMCkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDEyMCwgMjAwLCAyNTUsMSkgMCUscmdiYSgxMjAsIDIwMCwgMjU1LDApIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgxMjAsIDIwMCwgMjU1LDEpIDAlLHJnYmEoMTIwLCAyMDAsIDI1NSwwKSAxMDAlKTsgLyogVzNDICovXHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duLWNlbnRlciAwLjRzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2NhbGUtZG93bi1jZW50ZXIgMC40cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgfVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/allergy/allergy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/allergy/allergy.component.ts ***!
  \**********************************************/
/*! exports provided: AllergyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllergyComponent", function() { return AllergyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AllergyComponent = class AllergyComponent {
    constructor() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = ['Fever', 'Cough', 'Deramatographism', 'Diarrhea', 'Head Ache', 'Nausea', 'Running Nose', 'Sneezing', 'Swelling Of Tissues', 'Unconsiousness', 'Vomiting', 'Wheezing'];
        this.disabled = false;
    }
    ngOnInit() {
        $(document).ready(() => {
            $('.datepicker').pickadate();
            $(".card-details").hide();
            $("#general-vitals").show();
            $("#vitals").addClass("active");
            $("#vitals-section").show();
            $('#no-known-allergies').change(function () {
                if (this.checked) {
                    $(".allergy-wrapper").addClass("disable-events");
                }
                else {
                    $(".allergy-wrapper").removeClass("disable-events");
                }
            });
        });
    }
};
AllergyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allergy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./allergy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/allergy/allergy.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./allergy.component.css */ "./src/app/allergy/allergy.component.css")).default]
    })
], AllergyComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _allergy_allergy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allergy/allergy.component */ "./src/app/allergy/allergy.component.ts");
/* harmony import */ var _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vitals/vitals.component */ "./src/app/vitals/vitals.component.ts");
/* harmony import */ var _orders1_orders1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders1/orders1.component */ "./src/app/orders1/orders1.component.ts");
/* harmony import */ var _hist_hist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hist/hist.component */ "./src/app/hist/hist.component.ts");
/* harmony import */ var _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagnosis/diagnosis.component */ "./src/app/diagnosis/diagnosis.component.ts");








const routes = [
    { path: '', component: _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_4__["VitalsComponent"] },
    { path: 'vitals', component: _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_4__["VitalsComponent"] },
    { path: 'allergy', component: _allergy_allergy_component__WEBPACK_IMPORTED_MODULE_3__["AllergyComponent"] },
    { path: 'orders1', component: _orders1_orders1_component__WEBPACK_IMPORTED_MODULE_5__["Orders1Component"] },
    { path: 'hist', component: _hist_hist_component__WEBPACK_IMPORTED_MODULE_6__["HistComponent"] },
    { path: 'diagnosis', component: _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_7__["DiagnosisComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vitals/vitals.component */ "./src/app/vitals/vitals.component.ts");
/* harmony import */ var _allergy_allergy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allergy/allergy.component */ "./src/app/allergy/allergy.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _hist_hist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hist/hist.component */ "./src/app/hist/hist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _orders1_orders1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orders1/orders1.component */ "./src/app/orders1/orders1.component.ts");
/* harmony import */ var _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./diagnosis/diagnosis.component */ "./src/app/diagnosis/diagnosis.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
































function setupTranslateFactory(service) {
    return () => service.use('en');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _vitals_vitals_component__WEBPACK_IMPORTED_MODULE_5__["VitalsComponent"],
            _allergy_allergy_component__WEBPACK_IMPORTED_MODULE_6__["AllergyComponent"],
            _hist_hist_component__WEBPACK_IMPORTED_MODULE_10__["HistComponent"],
            _translate_pipe__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"],
            _orders1_orders1_component__WEBPACK_IMPORTED_MODULE_16__["Orders1Component"],
            _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_17__["DiagnosisComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"]
        ],
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_27__["CdkStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_28__["CdkTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_22__["NgxMatSelectSearchModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _translate_service__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: setupTranslateFactory,
                deps: [_translate_service__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/diagnosis/diagnosis.component.css":
/*!***************************************************!*\
  !*** ./src/app/diagnosis/diagnosis.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@media only screen and (max-width: 600px) {\r\n    i{\r\n        font-size: 10.5px !important;\r\n          padding: 2.8px 3px !important;\r\n    \r\n      }\r\n      .hero-message::before {\r\n                  \r\n        min-width: 91.7% !important;\r\n      \r\n        \r\n    }\r\n    .card.sc{\r\n        position: absolute;\r\n        z-index: 1;\r\n        width: 91.9%;\r\n        background-color: #62a6c2 !important;\r\n        top: -3px;\r\n      }\r\n      table th{\r\n    \r\n        font-size :13px !important;\r\n      }\r\n      h3{\r\n        font-size: 20.5px !important;\r\n      }\r\n      .col-md-4.bt{\r\n        margin-bottom: -41px;\r\n      }\r\n      h1{\r\n        font-size: 31px;\r\n      }\r\n      h2{\r\n        font-size: 22px;\r\n        margin-top: 10px;\r\n      }\r\n    .card.tb{\r\n      margin-top:10px;  \r\n    }\r\n\r\nh4{\r\n    font-size: 20.2px;\r\n}\r\n\r\n  \r\n}\r\n\r\n.ab{\r\n    border-color: #1795ac !important;\r\n}\r\n\r\n.card-header23{\r\n    /* padding: 4px !important; */\r\n    border-top-right-radius: 15px !important;\r\n    border-top-left-radius: 15px !important ;\r\n\r\n}\r\n\r\ntable.table tbody td{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\r\n    border-color: #3cbad0 !important;\r\n}\r\n\r\n.icontop1:hover{\r\n    box-shadow: 0px 0px 5px 5px #fff;\r\n}\r\n\r\n.card-header1{\r\n    z-index: 2;\r\n    top: 20px;\r\n}\r\n\r\n/* .card{\r\n    padding-right: 0px;3\r\n\r\n} */\r\n\r\n.shadow-textarea textarea.form-control::-webkit-input-placeholder {\r\n    font-weight: 300;\r\n}\r\n\r\n.shadow-textarea textarea.form-control::-moz-placeholder {\r\n    font-weight: 300;\r\n}\r\n\r\n.shadow-textarea textarea.form-control::-ms-input-placeholder {\r\n    font-weight: 300;\r\n}\r\n\r\n.shadow-textarea textarea.form-control::placeholder {\r\n    font-weight: 300;\r\n}\r\n\r\n.shadow-textarea textarea.form-control {\r\n    padding-left: 0.8rem;\r\n}\r\n\r\n.ca{\r\n    z-index: 2;\r\n    top:0px;\r\n    border-radius:0px !important;\r\n    border-width:0px ;\r\n    box-shadow: 1px 1px rgb(10, 10, 10);\r\n    bottom: 10px;\r\n    width: 15%;\r\n    background-color: rgb(255, 255, 255);\r\n    align-items: center;\r\n\r\n}\r\n\r\n#regbutton {\r\n    z-index: 2;\r\n    top: 3rem;\r\n    width: 140px;\r\n    padding-bottom: 10px;\r\n    background: linear-gradient(0deg, rgb(36, 64, 70) 15%, rgb(36, 64, 70) 15%, rgb(10, 89, 134) 61%, rgb(10, 89, 134) 61%) !important;\r\n    font-size: 16px;\r\n    align-items: center;\r\n    border-radius: 40px;\r\n}\r\n\r\n.card{\r\n    border-radius: 0px !important;\r\n    box-shadow: 5px;\r\n\r\n}\r\n\r\n.shadow-textarea{\r\n    box-shadow: 3px;\r\n}\r\n\r\n/* #user_input, #user_input1 {\r\n    display: block !important;\r\n} */\r\n\r\n.example-form1 {\r\n    min-width: 400px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\nmat-radio-button .radio1 .mat-off{\r\n      border-color: rgb(45, 177, 253);\r\n      color: rgb(46, 164, 201);\r\n      border-inline-color: rgb(46, 164, 201);\r\n  }\r\n\r\nmat-form-field{\r\n    width: 100% !important;\r\n    margin-top:0px;\r\n    margin-bottom: -14px;\r\n}\r\n\r\n#dia {\r\n    background-color: rgb(61, 174, 240);\r\n    /* padding: 8px; */\r\n    border-radius: 5px;\r\n    color: #000;\r\n}\r\n\r\n.card.tb{\r\n\r\n    margin-top: 11px !important;\r\n    border-radius: 4px !important;\r\n    opacity: 0.6;\r\n\r\n  background:linear-gradient(160deg,#006894,#006894)!important;\r\n  }\r\n\r\n.mat-expansion-panel{\r\n    background-color: #fff;\r\n      \r\n  }\r\n\r\n.mat-expansion-panel-header-title,.mat-expansion-panel{\r\n\r\n        color: #000;\r\n    }\r\n\r\n::-webkit-scrollbar { \r\n        display: none; \r\n        }\r\n\r\nh4{\r\n            padding-top: 10px !important;\r\n          \r\n            padding-left: 9px !important;\r\n          }\r\n\r\n.mat-expansion-panel-header.ht{\r\n            height: 40px !important;\r\n            }\r\n\r\n.mat-accordion .mat-expansion-panel:first-of-type,.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){\r\n                border-radius: 4px !important;\r\n            }\r\n\r\n.mat-form-field-label-wrapper.autocomplete-items{\r\n                color: black !important;\r\n            }\r\n\r\n.hero-message::before {\r\n                content: \"\";\r\n                display: block;\r\n                position: absolute;\r\n                border-radius: 4px;\r\n                margin-left: 0px;\r\n                min-width: 91%;\r\n                border-radius: 4px;\r\n                height: 2.5rem;\r\n                z-index: -1;\r\n                opacity: 0.5;\r\n                background-color: #006894;\r\n                }\r\n\r\ni {\r\n                  display: inline-block;\r\n                  text-align: center;\r\n                  color: #f6f8f9cc;\r\n                  font-size: 12px;\r\n                  border: 1.5px solid #f6f8f9cc;\r\n                  border-radius: 50% !important;\r\n                  padding: 3px 4px;\r\n                  float: right;\r\n                \r\n                  }\r\n\r\n#chn{\r\n                cursor: pointer;\r\n              }\r\n\r\n.inputTextClass{\r\n                outline: none;\r\n                border: none;\r\n                caret-color: white !important;\r\n                color: white !important;\r\n                background-color: transparent;\r\n                width: 100%;\r\n                border-bottom: 1.3px solid #dad3d3;\r\n                box-shadow: none !important;\r\n            }\r\n\r\n.list-group-item{\r\n                background-color: transparent;\r\n                color: white;\r\n                border-top: none;\r\n                border: none;\r\n                 margin-top: 4px;\r\n                 font-weight: 400;\r\n                padding: 9px;\r\n                font-size: 15px;\r\n              }\r\n\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n                color: white;\r\n              }\r\n\r\n::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n                color: white;\r\n              }\r\n\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n                color: white;\r\n              }\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n                color: white;\r\n              }\r\n\r\n.card.sc{\r\n                background-color: #4193b7ad;\r\n               border-radius:.25rem ;\r\n              }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhZ25vc2lzL2RpYWdub3Npcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksNEJBQTRCO1VBQzFCLDZCQUE2Qjs7TUFFakM7TUFDQTs7UUFFRSwyQkFBMkI7OztJQUcvQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLFNBQVM7TUFDWDtNQUNBOztRQUVFLDBCQUEwQjtNQUM1QjtNQUNBO1FBQ0UsNEJBQTRCO01BQzlCO01BQ0E7UUFDRSxvQkFBb0I7TUFDdEI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7UUFDZixnQkFBZ0I7TUFDbEI7SUFDRjtNQUNFLGVBQWU7SUFDakI7O0FBRUo7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4Qyx3Q0FBd0M7O0FBRTVDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFHQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBQ0E7OztHQUdHOztBQUNIO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUZBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUZBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUZBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLE9BQU87SUFDUCw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtJQUFrSTtJQUNsSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUc7O0FBR0g7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFQTtNQUNJLCtCQUErQjtNQUMvQix3QkFBd0I7TUFDeEIsc0NBQXNDO0VBQzFDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBQ0E7O0lBRUksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixZQUFZOztFQUVkLDREQUE0RDtFQUM1RDs7QUFDQTtJQUNFLHNCQUFzQjs7RUFFeEI7O0FBR0U7O1FBRUksV0FBVztJQUNmOztBQUNBO1FBQ0ksYUFBYTtRQUNiOztBQUVBO1lBQ0ksNEJBQTRCOztZQUU1Qiw0QkFBNEI7VUFDOUI7O0FBQ0E7WUFDRSx1QkFBdUI7WUFDdkI7O0FBQ0E7Z0JBQ0ksNkJBQTZCO1lBQ2pDOztBQUVBO2dCQUNJLHVCQUF1QjtZQUMzQjs7QUFDQTtnQkFDSSxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxZQUFZO2dCQUNaLHlCQUF5QjtnQkFDekI7O0FBRUE7a0JBQ0UscUJBQXFCO2tCQUNyQixrQkFBa0I7a0JBQ2xCLGdCQUFnQjtrQkFDaEIsZUFBZTtrQkFDZiw2QkFBNkI7a0JBQzdCLDZCQUE2QjtrQkFDN0IsZ0JBQWdCO2tCQUNoQixZQUFZOztrQkFFWjs7QUFHSjtnQkFDRSxlQUFlO2NBQ2pCOztBQUNBO2dCQUNFLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWiw2QkFBNkI7Z0JBQzdCLHVCQUF1QjtnQkFDdkIsNkJBQTZCO2dCQUM3QixXQUFXO2dCQUNYLGtDQUFrQztnQkFDbEMsMkJBQTJCO1lBQy9COztBQUNFO2dCQUNFLDZCQUE2QjtnQkFDN0IsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFlBQVk7aUJBQ1gsZUFBZTtpQkFDZixnQkFBZ0I7Z0JBQ2pCLFlBQVk7Z0JBQ1osZUFBZTtjQUNqQjs7QUFDQSw4QkFBZ0IseUNBQXlDO2dCQUN2RCxZQUFZO2NBQ2Q7O0FBRkEscUJBQWdCLHlDQUF5QztnQkFDdkQsWUFBWTtjQUNkOztBQUZBLDBCQUFnQix5Q0FBeUM7Z0JBQ3ZELFlBQVk7Y0FDZDs7QUFGQSxnQkFBZ0IseUNBQXlDO2dCQUN2RCxZQUFZO2NBQ2Q7O0FBRUE7Z0JBQ0UsMkJBQTJCO2VBQzVCLHFCQUFxQjtjQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy9kaWFnbm9zaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyLjhweCAzcHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIG1pbi13aWR0aDogOTEuNyUgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuY2FyZC5zY3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB3aWR0aDogOTEuOSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTZjMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZSB0aHtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZSA6MTNweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbC1tZC00LmJ0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00MXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgICAgfVxyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgLmNhcmQudGJ7XHJcbiAgICAgIG1hcmdpbi10b3A6MTBweDsgIFxyXG4gICAgfVxyXG5cclxuaDR7XHJcbiAgICBmb250LXNpemU6IDIwLjJweDtcclxufVxyXG5cclxuICBcclxufVxyXG5cclxuLmFie1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTc5NWFjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtaGVhZGVyMjN7XHJcbiAgICAvKiBwYWRkaW5nOiA0cHggIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQgO1xyXG5cclxufVxyXG5cclxudGFibGUudGFibGUgdGJvZHkgdGR7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzNjYmFkMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29udG9wMTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjZmZmO1xyXG59XHJcblxyXG5cclxuLmNhcmQtaGVhZGVyMXtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuLyogLmNhcmR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7M1xyXG5cclxufSAqL1xyXG4uc2hhZG93LXRleHRhcmVhIHRleHRhcmVhLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4uc2hhZG93LXRleHRhcmVhIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxufVxyXG4uY2F7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6MHB4IDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbiNyZWdidXR0b24ge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogM3JlbTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigzNiwgNjQsIDcwKSAxNSUsIHJnYigzNiwgNjQsIDcwKSAxNSUsIHJnYigxMCwgODksIDEzNCkgNjElLCByZ2IoMTAsIDg5LCAxMzQpIDYxJSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiA1cHg7XHJcblxyXG59XHJcbi5zaGFkb3ctdGV4dGFyZWF7XHJcbiAgICBib3gtc2hhZG93OiAzcHg7XHJcbn1cclxuXHJcbi8qICN1c2VyX2lucHV0LCAjdXNlcl9pbnB1dDEge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuXHJcbi5leGFtcGxlLWZvcm0xIHtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBtYXQtcmFkaW8tYnV0dG9uIC5yYWRpbzEgLm1hdC1vZmZ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDQ1LCAxNzcsIDI1Myk7XHJcbiAgICAgIGNvbG9yOiByZ2IoNDYsIDE2NCwgMjAxKTtcclxuICAgICAgYm9yZGVyLWlubGluZS1jb2xvcjogcmdiKDQ2LCAxNjQsIDIwMSk7XHJcbiAgfVxyXG5cclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xyXG59XHJcblxyXG5cclxuI2RpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDE3NCwgMjQwKTtcclxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jYXJkLnRie1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDExcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG5cclxuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNjBkZWcsIzAwNjg5NCwjMDA2ODk0KSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLC5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG5cclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5odHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6Zmlyc3Qtb2YtdHlwZSwubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCksIC5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nKXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyLmF1dG9jb21wbGV0ZS1pdGVtc3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZXJvLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MSU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjg5NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjZmOGY5Y2M7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjZmOGY5Y2M7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNHB4O1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICNjaG57XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbnB1dFRleHRDbGFzc3tcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjYXJldC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkYWQzZDM7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmNhcmQuc2N7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE5M2I3YWQ7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6LjI1cmVtIDtcclxuICAgICAgICAgICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/diagnosis/diagnosis.component.ts":
/*!**************************************************!*\
  !*** ./src/app/diagnosis/diagnosis.component.ts ***!
  \**************************************************/
/*! exports provided: DiagnosisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisComponent", function() { return DiagnosisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let DiagnosisComponent = class DiagnosisComponent {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Present' },
            { value: 'pizza-1', viewValue: 'Not Present' }
        ];
    }
    ngOnInit() {
        var eid;
        jquery__WEBPACK_IMPORTED_MODULE_2__(".mat-expansion-panel ").click(function () {
            var newVal = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            eid = newVal;
            console.log(newVal);
        });
        var Val1;
        jquery__WEBPACK_IMPORTED_MODULE_2__(function ($) {
            $('#chn').click(function () {
                if ($("#chn").hasClass('fa fa-minus')) {
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                }
                else {
                    $("#chn").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    console.log(Val1);
                    $('#scan').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan1').slideUp();
                    $('#scan2').slideUp();
                }
            });
            $('#chn1').click(function () {
                if ($("#chn1").hasClass('fa fa-minus')) {
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan1').slideUp();
                }
                else {
                    $("#chn1").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    console.log(Val1);
                    $('#scan1').slideToggle();
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan2').slideUp();
                }
            });
            $('#chn2').click(function () {
                if ($("#chn2").hasClass('fa fa-minus')) {
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan2').slideUp();
                }
                else {
                    $("#chn2").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    console.log(Val1);
                    $('#scan2').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan1').slideUp();
                }
            });
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(function ($) {
            $(".inputTextClass").click(function () {
                $('input[type="text"]').val('');
            });
        });
        function autocomplete(inp, arr) {
            var nameid;
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                if (!val) {
                    return false;
                }
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            // inp.value = this.getElementsByTagName("input")[0].value;
                            //   var selValue = this.getElementsByTagName("input")[0].value;
                            //   inp.value = selValue;
                            //   console.log(selValue);
                            //  if(eid == "new"){
                            //   $("#tab1").append('<tr><td>'+selValue+'</td><td>'+""+'</td></tr>').show(300);
                            //   $("#tab2").hide();
                            //  }
                            //  else if(eid == "new1")
                            //  {
                            //   $("#tab2").append('<tr><td>'+selValue+'</td><td>'+""+'</td></tr>').show(300);
                            //   $("#tab1").hide();
                            //  }
                            var selValue = this.getElementsByTagName("input")[0].value;
                            inp.value = selValue;
                            console.log(selValue);
                            if (Val1 == "chn") {
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#newValueDisease").html(selValue);
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#tab1").append('<tr><td>' + '</td><td>' + '</td></tr>').show();
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#exp1").show(300);
                            }
                            else if (Val1 == "chn1") {
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#newValueDisease1").html(selValue);
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#tab2").append('<tr><td>' + '</td><td>' + '</td></tr>').show();
                                jquery__WEBPACK_IMPORTED_MODULE_2__("#exp2").show(300);
                            }
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                // if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x)
                            x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x)
                    return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length)
                    currentFocus = 0;
                if (currentFocus < 0)
                    currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }
        /*An array containing all the country names in the world:*/
        var sevices = ["stuff", "AMINOLEVULINIC ACID (RANDOM)-URINE", "AMINOLEVULINIC ACID", "ALPHA-HYDROXYPROGESTERONE, DRIED BLOOD SPOT", "A-HYDROXYPROGESTERONE-SERUM", "HYDROXY", "KETOSTEROIDS, URINE", "asthma",
            "multiple sclerosis",
            "cancers",
            "ciliopathies",
            "cleft palate",
            "diabetes",
            "heart disease",
            "hypertension",
            "inflammatory bowel disease",
            "intellectual disability",
            "mood disorder",
            "obesity",
            "refractive error",
            "infertility"];
        /*initiate the autocomplete function on the "service" element, and pass along the sevices array as possible autocomplete values:*/
        autocomplete(document.getElementById("service1"), sevices);
        autocomplete(document.getElementById("service2"), sevices);
    }
};
DiagnosisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagnosis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagnosis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagnosis.component.css */ "./src/app/diagnosis/diagnosis.component.css")).default]
    })
], DiagnosisComponent);



/***/ }),

/***/ "./src/app/hist/hist.component.css":
/*!*****************************************!*\
  !*** ./src/app/hist/hist.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 600px) {\r\n  i{\r\n    font-size: 10.5px !important;\r\n      padding: 2.8px 3px !important;\r\n\r\n  }\r\n  .hero-message::before {\r\n              \r\n    min-width: 92% !important;\r\n  \r\n    }\r\n  .col-md-4.bt{\r\n    margin-bottom: -71px !important;\r\n  }\r\n  table th{\r\n\r\n    font-size :13px !important;\r\n  }\r\n  h2{\r\n    font-size: 22px;\r\n    margin-top: 10px;\r\n  }\r\n  h1{\r\n    font-size: 31px;\r\n  }\r\n  h3{\r\n    font-size: 20.5px !important;\r\n  }\r\n  .card.tb {\r\n    margin-top: -2rem;\r\n    max-height: 152px !important;\r\n    overflow: auto !important ;\r\n    background-color: transparent;\r\n}\r\n  .card.left{\r\n\r\n    margin-left: 21px !important;\r\n  }\r\n  .dropdown{\r\n    cursor: pointer;\r\n    margin-top: 12px;\r\n    width: 88%;\r\n    margin-top: 3px;\r\n  }\r\n  button#dropdownMenu5.btn.btn-primary.dropdown-toggle{\r\n    font-size: 15px !important;\r\n\r\n  }\r\n.card.sc{\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 91.9%;\r\n  background-color: #62a6c2 !important;\r\n}\r\n\r\n  \r\n    #options.dropdown-menu.show{\r\n      transform: translate3d(-13px, 26px, 0px);\r\n\r\n    }\r\n\r\n\r\n  }\r\n  .card.sc{\r\n    \r\n    background-color: #4193b7ad;\r\n    \r\n  }\r\n  .mat-expansion-panel{\r\n    background-color: #0e07073b;\r\n      \r\n  }\r\n  .mat-expansion-panel-header-title,.mat-expansion-panel{\r\n\r\n    color: white;\r\n}\r\n  .hero-message::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 4px;\r\n    margin-left: 0px;\r\n    min-width: 91%;\r\n    border-radius: 4px;\r\n    height: 2.5rem;\r\n    z-index: -1;\r\n    opacity: 0.5;\r\n            background-color: #006894;\r\n    }\r\n  .list-group-item{\r\n      background-color: transparent;\r\n      color: white;\r\n      border-top: none;\r\n       margin-top: 4px;\r\n       border: none;\r\n      padding: 9px;\r\n      font-size: 14px;\r\n    }\r\n  .inputTextClass{\r\n      outline: none;\r\n      border: none;\r\n      caret-color: white !important;\r\n      color: white !important;\r\n      background-color: transparent;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #dad3d3;\r\n      box-shadow: none !important;\r\n  }\r\n  .card-header.head{\r\n        padding-top: 10px;\r\n        background-color: transparent;\r\n        color: #716e6e !important;\r\n        border:none;\r\n    }\r\n  .card-body.six{\r\n        cursor: pointer;\r\n        height: 13rem;;\r\n    }\r\n  ::-webkit-scrollbar { \r\n        display: none; \r\n        }\r\n  .btn.btn-primary.btn-rounded.waves-effect.waves-light{\r\n\r\n            background-color: #27959a !important;\r\n           \r\n          \r\n          }\r\n  .dropdown .dropdown-menu .dropdown-item:hover{\r\n            background-color:   #27959a;\r\n\r\n          }\r\n  .dropdown-toggle::after{\r\n            float: right;\r\n            margin-top: 9px;\r\n          }\r\n  button#dropdownMenu5.btn.btn-primary.dropdown-toggle{\r\n            font-size: 17px;\r\n        box-shadow: none;\r\n\r\n          }\r\n  #dropdownMenu5.btn.btn-primary.dropdown-toggle.waves-effect.waves-light{\r\n            background-color: #fff !important;\r\n            width:100%;\r\n            margin-left: 0px;\r\n            text-align: left;\r\n            color:#716e6e;\r\n            font-size: 14px !important;\r\n            padding: 10.8px;\r\n            \r\n          }\r\n  .dropdown-item:hover{\r\n    background-color:   #27959a;\r\n    box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n    color:white;\r\n    border-radius: .125rem;\r\n    transition: all .1s linear;\r\n  }\r\n  .dropdown-menu{\r\n  width:100%;\r\n  }\r\n  .dropdown .dropdown-menu .dropdown-item{\r\n    padding: 0.4rem;\r\n    width: 89%;\r\n    text-align: left;\r\n    font-size: .9rem;\r\n  }\r\n  .btn{\r\n      padding: 0 !important;\r\n      /* margin: 0 !important; */\r\n  }\r\n  .btn-primary.dropdown-toggle {\r\n    background-color: transparent !important;\r\n    color: #716e6e;\r\n    box-shadow: none;\r\n    text-align: left;\r\n  }\r\n  .btn-primary.dropdown-toggle:focus{\r\n    background-color: transparent !important;\r\n    color :#716e6e;\r\n  }\r\n  .btn-primary.dropdown-toggle:hover {\r\n    background-color: transparent !important;\r\n    color :#716e6e;\r\n    \r\n  }\r\n  .dropdown-item:hover{\r\n  color:white !important;\r\n  }\r\n  #options.dropdown-menu.show{\r\n    transform: translate3d(-45px, 33px, 0px);\r\n\r\n  }\r\n  .btn{\r\n  text-transform:capitalize !important;\r\n  padding: 0.38rem 0.5rem;\r\n  }\r\n  i {\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: #f6f8f9cc;\r\n    font-size: 12px;\r\n    border: 1.5px solid #f6f8f9cc;\r\n    border-radius: 50% !important;\r\n    padding: 3px 4px;\r\n    float: right;\r\n  \r\n    }\r\n  .dropdown {\r\n    position: inherit !important;\r\n    padding: 21px;\r\n\r\n}\r\n  #chn{\r\n  cursor: pointer;\r\n}\r\n  table{\r\n\r\n  color: white !important;\r\n}\r\n  table th{\r\n\r\n  font-size :13.7px;\r\n}\r\n  .card.tb{\r\n  margin-top: 11px !important;\r\n  max-height:260px; \r\n  overflow: auto ;\r\n  opacity: 0.6;\r\nbackground:linear-gradient(160deg,#006894,#006894)!important;\r\n}\r\n  h4{\r\n  padding-top: 10px !important;\r\n\r\n  padding-left: 9px !important;\r\n}\r\n  /* .mat-expansion-panel-header#mat-expansion-panel-header-0{\r\n  height: 47px !important;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdC9oaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDRCQUE0QjtNQUMxQiw2QkFBNkI7O0VBRWpDO0VBQ0E7O0lBRUUseUJBQXlCOztJQUV6QjtFQUNGO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7O0lBRUUsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztFQUNFOztJQUVFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMEJBQTBCOztFQUU1QjtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOzs7SUFHSTtNQUNFLHdDQUF3Qzs7SUFFMUM7OztFQUdGO0VBQ0E7O0lBRUUsMkJBQTJCOztFQUU3QjtFQUNBO0lBQ0UsMkJBQTJCOztFQUU3QjtFQUNBOztJQUVFLFlBQVk7QUFDaEI7RUFDRTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7WUFDSix5QkFBeUI7SUFDakM7RUFFQTtNQUNFLDZCQUE2QjtNQUM3QixZQUFZO01BQ1osZ0JBQWdCO09BQ2YsZUFBZTtPQUNmLFlBQVk7TUFDYixZQUFZO01BQ1osZUFBZTtJQUNqQjtFQUNBO01BQ0UsYUFBYTtNQUNiLFlBQVk7TUFDWiw2QkFBNkI7TUFDN0IsdUJBQXVCO01BQ3ZCLDZCQUE2QjtNQUM3QixXQUFXO01BQ1gsa0NBQWtDO01BQ2xDLDJCQUEyQjtFQUMvQjtFQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsV0FBVztJQUNmO0VBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtFQUNBO1FBQ0ksYUFBYTtRQUNiO0VBRUE7O1lBRUksb0NBQW9DOzs7VUFHdEM7RUFDQTtZQUNFLDJCQUEyQjs7VUFFN0I7RUFDQTtZQUNFLFlBQVk7WUFDWixlQUFlO1VBQ2pCO0VBQ0E7WUFDRSxlQUFlO1FBQ25CLGdCQUFnQjs7VUFFZDtFQUNBO1lBQ0UsaUNBQWlDO1lBQ2pDLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYiwwQkFBMEI7WUFDMUIsZUFBZTs7VUFFakI7RUFFVjtJQUNJLDJCQUEyQjtJQUMzQixzRUFBc0U7SUFDdEUsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7RUFDQTtFQUNBLFVBQVU7RUFDVjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSxxQkFBcUI7TUFDckIsMEJBQTBCO0VBQzlCO0VBRUM7SUFDQyx3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCO0VBQ0M7SUFDQyx3Q0FBd0M7SUFDeEMsY0FBYzs7RUFFaEI7RUFDQTtFQUNBLHNCQUFzQjtFQUN0QjtFQUVBO0lBQ0Usd0NBQXdDOztFQUUxQztFQUVGO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVo7RUFFRjtJQUNFLDRCQUE0QjtJQUM1QixhQUFhOztBQUVqQjtFQUNBO0VBQ0UsZUFBZTtBQUNqQjtFQUNBOztFQUVFLHVCQUF1QjtBQUN6QjtFQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkLDREQUE0RDtBQUM1RDtFQUVBO0VBQ0UsNEJBQTRCOztFQUU1Qiw0QkFBNEI7QUFDOUI7RUFDQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2hpc3QvaGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGl7XHJcbiAgICBmb250LXNpemU6IDEwLjVweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAyLjhweCAzcHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC5oZXJvLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICBtaW4td2lkdGg6IDkyJSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgfVxyXG4gIC5jb2wtbWQtNC5idHtcclxuICAgIG1hcmdpbi1ib3R0b206IC03MXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRhYmxlIHRoe1xyXG5cclxuICAgIGZvbnQtc2l6ZSA6MTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzMXB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkLnRiIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xyXG4gICAgbWF4LWhlaWdodDogMTUycHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuICAuY2FyZC5sZWZ0e1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICBidXR0b24jZHJvcGRvd25NZW51NS5idG4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuLmNhcmQuc2N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDkxLjklO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmE2YzIgIWltcG9ydGFudDtcclxufVxyXG5cclxuICBcclxuICAgICNvcHRpb25zLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTNweCwgMjZweCwgMHB4KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiAgLmNhcmQuc2N7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTkzYjdhZDtcclxuICAgIFxyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTA3MDczYjtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSwubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuICAuaGVyby1tZXNzYWdlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1pbi13aWR0aDogOTElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjg5NDtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRUZXh0Q2xhc3N7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY2FyZXQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkYWQzZDM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gICAgLmNhcmQtaGVhZGVyLmhlYWR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MTZlNmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkuc2l4e1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEzcmVtOztcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi5idG4tcHJpbWFyeS5idG4tcm91bmRlZC53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHR7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NTlhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICAjMjc5NTlhO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiNkcm9wZG93bk1lbnU1LmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNkcm9wZG93bk1lbnU1LmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiM3MTZlNmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMC44cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICAjMjc5NTlhO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgLyogbWFyZ2luOiAwICFpbXBvcnRhbnQ7ICovXHJcbiAgfVxyXG5cclxuICAgLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3MTZlNmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciA6IzcxNmU2ZTtcclxuICB9XHJcbiAgIC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yIDojNzE2ZTZlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbiAgI29wdGlvbnMuZHJvcGRvd24tbWVudS5zaG93e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDVweCwgMzNweCwgMHB4KTtcclxuXHJcbiAgfVxyXG4gIFxyXG4uYnRue1xyXG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjM4cmVtIDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2Y2ZjhmOWNjO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjZmOGY5Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjFweDtcclxuXHJcbn1cclxuI2NobntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxudGFibGV7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHRoe1xyXG5cclxuICBmb250LXNpemUgOjEzLjdweDtcclxufVxyXG4uY2FyZC50YntcclxuICBtYXJnaW4tdG9wOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDoyNjBweDsgXHJcbiAgb3ZlcmZsb3c6IGF1dG8gO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCMwMDY4OTQsIzAwNjg5NCkhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNHtcclxuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciNtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0we1xyXG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xyXG59ICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/hist/hist.component.ts":
/*!****************************************!*\
  !*** ./src/app/hist/hist.component.ts ***!
  \****************************************/
/*! exports provided: HistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistComponent", function() { return HistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistComponent = class HistComponent {
    constructor() { }
    ngOnInit() {
        var nameid;
        var Val1;
        $('#arrow').click(function () {
            $('#exp2').show(450);
            var $item1 = $('<tr><td>' + $('#hist1').val() + '</td></tr>').hide();
            $('#historyofIllness').append($item1).show();
            $item1.show('slow');
        });
        $('#arrow1').click(function () {
            $('#exp1').show(450);
            var $item2 = $('<tr><td>' + $('#chief1').val() + '</td></tr>').hide();
            $('#chiefTable').append($item2).show();
            $item2.show('slow');
        });
        $(function ($) {
            $('#chn').click(function () {
                if ($("#chn").hasClass('fa fa-minus')) {
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto1').slideUp();
                }
                else {
                    $("#chn").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#auto1').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto2').slideUp();
                    $('#auto3').slideUp();
                    $('#auto4').slideUp();
                }
            });
            $('#chn1').click(function () {
                if ($("#chn1").hasClass('fa fa-minus')) {
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto2').slideUp();
                }
                else {
                    $("#chn1").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#auto2').slideToggle();
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto1').slideUp();
                    $('#auto3').slideUp();
                    $('#auto4').slideUp();
                }
            });
            $('#chn2').click(function () {
                if ($("#chn2").hasClass('fa fa-minus')) {
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto3').slideUp();
                }
                else {
                    $("#chn2").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#auto3').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto1').slideUp();
                    $('#auto2').slideUp();
                    $('#auto4').slideUp();
                }
            });
            $('#chn3').click(function () {
                if ($("#chn3").hasClass('fa fa-minus')) {
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto4').slideUp();
                }
                else {
                    $("#chn3").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#auto4').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#auto1').slideUp();
                    $('#auto2').slideUp();
                    $('#auto3').slideUp();
                }
            });
        });
        $(function ($) {
            $(".inputTextClass").click(function () {
                $('input[type="text"]').val('');
            });
            $(".inputTextClass").click(function () {
                $('textarea[type="text"]').val('');
            });
        });
        function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                // closeAllLists();
                if (!val) {
                    return false;
                }
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            var selValue = this.getElementsByTagName("input")[0].value;
                            inp.value = selValue;
                            console.log(Val1);
                            //     if(Val1=="chn")
                            // {             
                            //     $('#exp1').show(450);
                            //    var $item =$('<tr><td>'+selValue+'</td></tr>');
                            //    $('#chiefTable').append($item).show();
                            //    $item.show('slow');
                            //     }              
                            if (Val1 == 'chn2') {
                                $('#exp3').show(350);
                                var $item2 = $('<tr><td>' + selValue + '</td></tr>');
                                $('#comoriditiesTable').append($item2).show();
                                $item2.show('slow');
                                // Val1=null;
                            }
                            else if (Val1 == 'chn3') {
                                $('#exp4').show(350);
                                var $item3 = $('<tr><td>' + selValue + '</td></tr>');
                                $('#assosymTable').append($item3).show();
                                $item3.show('slow');
                                // Val1=null;
                            }
                            // closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                // if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x)
                            x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x)
                    return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length)
                    currentFocus = 0;
                if (currentFocus < 0)
                    currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }
        /*An array containing all the country names in the world:*/
        // var chieflist = ["ABNORMAL POSTURING OF LIMBS","APATHY","AURA","AUTOMATISM","BAND LIKE SENSATION","ERECTILE DYSFUNCTION","FLEXOR SPASMS","GAIT DISTURBANCES"];
        var comlist = ["Arthritis", "COPD", "Diabetes Mellitus", "Hypertension", "Renal disorders", "Thyroid Disorder"];
        var assolist = ["Abnormal", "Breathlessness", "Cold", "Dyspnea on exersion", "Frequent Urination", "Fatigue", "Loss of appetite", "Nausea or vomiting", "Shortness of breath"];
        /*initiate the autocomplete function on the "service" element, and pass along the sevices array as possible autocomplete values:*/
        // autocomplete(document.getElementById("chief1"), chieflist);
        autocomplete(document.getElementById("com1"), comlist);
        autocomplete(document.getElementById("asso1"), assolist);
    }
};
HistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hist/hist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hist.component.css */ "./src/app/hist/hist.component.css")).default]
    })
], HistComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control{\r\n    box-shadow: none !important;\r\n    \r\n    }\r\n    input.mat-input-element {\r\n        margin-top: -1.0625em !important;\r\n    }\r\n    .md-form{\r\n        margin-bottom: 1.7rem !important;\r\n        margin-top: -0.1rem !important;\r\n    }\r\n    .name,.name1{\r\n        font-size: 14px !important;\r\n    }\r\n    /* .cbp-vimenu{\r\n        display: none;\r\n       \r\n         }  */\r\n    #bg::before {\r\n    background-image: url('images.jpg');\r\n    \r\n    content: \"\";\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -2;\r\n    opacity: 0.4;\r\n    background-size: cover;\r\n}\r\n    #bg::after {\r\n\r\n    background:  linear-gradient(98deg, #30b2e8, #f7f6f6);\r\n    opacity: 0.5;\r\n    content: \"\";\r\n    display: block;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n     background-size: cover;\r\n    \r\n}\r\n    @media only screen and (max-width: 600px) {\r\n    button.sv{\r\n        position: absolute;\r\n        top: -5.5rem;\r\n        left: 17.8rem;\r\n    }\r\n   \r\n    #bg::after,#bg::before {\r\n        position: fixed;\r\n        /* height: 163%; */\r\n        background-attachment:fixed;\r\n        background-size: cover;\r\n    }\r\n\r\n    ::-webkit-scrollbar { \r\n        display: none; \r\n        }\r\n    }\r\n    .scroller{\r\n        font-weight: 400 !important;\r\n    }\r\n    button.mat-button.mat-button-base{\r\n\r\n        background-color: white;\r\n        border-radius: 50px;\r\n        color: #2b95f3;\r\n        box-shadow: 1px 1px 2px 1px darkgrey;\r\n}\r\n    .material-icons{\r\n        margin-top: -4px !important;\r\n        margin-left: -7px;\r\n    }\r\n    header{\r\n        background-color: #569cbac7;\r\n    height: 1rem;\r\n    }\r\n    footer{\r\n        background-color: #ffffff7a;\r\n        height: 1rem;\r\n        position: absolute;\r\n        bottom: 0rem;\r\n        padding: 0px;\r\n        margin-left: -1.1rem;\r\n        width: 102.5%;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7O0lBRTNCO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGdDQUFnQztRQUNoQyw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBOzs7YUFHUztJQUViO0lBQ0ksbUNBQXFEOztJQUVyRCxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7SUFDQTs7SUFFSSxxREFBcUQ7SUFDckQsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0tBQ1Ysc0JBQXNCOztBQUUzQjtJQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2I7SUFDSjtJQUNDO1FBQ0csMkJBQTJCO0lBQy9CO0lBQ0E7O1FBRUksdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2Qsb0NBQW9DO0FBQzVDO0lBRUk7UUFDSSwyQkFBMkI7UUFDM0IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0IsWUFBWTtJQUNaO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMDYyNWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWQtZm9ybXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjdyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmFtZSwubmFtZTF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvKiAuY2JwLXZpbWVudXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgXHJcbiAgICAgICAgIH0gICovXHJcbiAgICBcclxuI2JnOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9pbWFnZXMuanBnJyk7XHJcbiAgICBcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jYmc6OmFmdGVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KDk4ZGVnLCAjMzBiMmU4LCAjZjdmNmY2KTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGJ1dHRvbi5zdntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtNS41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDE3LjhyZW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgI2JnOjphZnRlciwjYmc6OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIC8qIGhlaWdodDogMTYzJTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIC5zY3JvbGxlcntcclxuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBidXR0b24ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWJhc2V7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyYjk1ZjM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4IGRhcmtncmV5O1xyXG59XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcclxuICAgIH1cclxuICAgIGhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY5Y2JhYzc7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjdhO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEuMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAyLjUlO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        $('.backB').click(function () {
            const url = 'https://webpage-test-1.github.io/';
            window.open(url, '_blank');
        });
        function doAnimation(container, animatorClass) {
            $(container).removeClass('bounceIn pulse slideInDown flipOutX flipInY flipInX animated').addClass(animatorClass + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass(animatorClass + ' animated');
            });
        }
        $(".slide-btn").click(function () {
            var panel = ".patient-banner-info";
            if ($(panel).is(":visible")) {
                doAnimation(panel, "flipOutX");
                setTimeout(function () {
                    $(panel).hide();
                    $(".pic-icon").toggleClass('image-flip');
                }, 700);
            }
            else {
                $(panel).show();
                doAnimation(panel, "flipInX");
                $(".pic-icon").toggleClass('image-flip');
            }
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/orders1/orders1.component.css":
/*!***********************************************!*\
  !*** ./src/app/orders1/orders1.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 600px) {\r\n  i{\r\n    font-size: 10.5px !important;\r\n      padding: 2.8px 3px !important;\r\n\r\n  }\r\n  .hero-message::before {\r\n              \r\n    min-width: 92% !important;\r\n  \r\n    }\r\n  table th{\r\n\r\n    font-size :13px !important;\r\n  }\r\n  h3{\r\n    font-size: 20.5px !important;\r\n  }\r\n  .col-md-4.bt{\r\n    margin-bottom: -41px;\r\n  }\r\n  h1{\r\n    font-size: 31px;\r\n  }\r\n  h2{\r\n    font-size: 22px;\r\n    margin-top: 10px;\r\n  }\r\n  .card.tb {\r\n    margin-top: -2rem;\r\n    max-height: 152px !important;\r\n    overflow: auto !important ;\r\n    background-color: transparent;\r\n}\r\n  .card.left{\r\n\r\n    margin-left: 21px !important;\r\n  }\r\n  .dropdown{\r\n    cursor: pointer;\r\n    margin-top: 12px;\r\n    width: 88%;\r\n  }\r\n.card.sc{\r\n  background-color: #62a6c2 !important;\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 91.9%;\r\n  top: -3px;\r\n}\r\n\r\n/*   \r\n    #chn{\r\n\r\n      position: absolute;\r\n      top: -80px;\r\n      right: 20px;\r\n    } */\r\n    #options.dropdown-menu.show{\r\n      transform: translate3d(-13px, 26px, 0px);\r\n\r\n    }\r\n\r\n\r\n  }\r\n \r\n\r\n  .hero-message::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 4px;\r\n    margin-left: 0px;\r\n    min-width: 91%;\r\n    border-radius: 4px;\r\n    height: 2.5rem;\r\n    z-index: -1;\r\n    opacity: 0.5;\r\n    background-color: #006894;\r\n    }\r\n \r\n\r\n  .inputTextClass{\r\n      outline: none;\r\n      border: none;\r\n      caret-color: white !important;\r\n      color: white !important;\r\n      background-color: transparent;\r\n      width: 100%;\r\n      border-bottom: 1.3px solid #dad3d3;\r\n      box-shadow: none !important;\r\n  }\r\n \r\n\r\n  .card-header.head{\r\n        padding-top: 10px;\r\n        background-color: transparent;\r\n        color: #716e6e !important;\r\n        border:none;\r\n    }\r\n \r\n\r\n  .card-body.six{\r\n        cursor: pointer;\r\n        height: 13rem;;\r\n    }\r\n \r\n\r\n  ::-webkit-scrollbar { \r\n        display: none; \r\n        }\r\n \r\n\r\n  .btn.btn-primary.btn-rounded.waves-effect.waves-light{\r\n\r\n            background-color: #27959a !important;\r\n           \r\n          \r\n          }\r\n \r\n\r\n  .dropdown .dropdown-menu .dropdown-item:hover{\r\n            background-color:   #27959a;\r\n\r\n          }\r\n \r\n\r\n  .dropdown-toggle::after{\r\n            float: right;\r\n            margin-top: 9px;\r\n          }\r\n \r\n\r\n  button#dropdownMenu5.btn.btn-primary.dropdown-toggle{\r\n            font-size: 17px;\r\n        box-shadow: none;\r\n\r\n          }\r\n \r\n\r\n  #dropdownMenu5.btn.btn-primary.dropdown-toggle.waves-effect.waves-light{\r\n            background-color: #fff !important;\r\n            width:100%;\r\n            margin-left: 0px;\r\n            text-align: left;\r\n            color:#716e6e;\r\n            font-size: 14px !important;\r\n            padding: 10.8px;\r\n            \r\n          }\r\n \r\n\r\n  .dropdown-item:hover{\r\n    background-color:   #27959a;\r\n    box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n    color:white;\r\n    border-radius: .125rem;\r\n    transition: all .1s linear;\r\n  }\r\n \r\n\r\n  .dropdown-menu{\r\n  width:100%;\r\n  }\r\n \r\n\r\n  .dropdown .dropdown-menu .dropdown-item{\r\n    padding: 0.4rem;\r\n    width: 89%;\r\n    text-align: left;\r\n    font-size: .9rem;\r\n  }\r\n \r\n\r\n  .btn{\r\n      padding: 0 !important;\r\n      /* margin: 0 !important; */\r\n  }\r\n \r\n\r\n  .btn-primary.dropdown-toggle {\r\n    background-color: transparent !important;\r\n    color: #716e6e;\r\n    box-shadow: none;\r\n    text-align: left;\r\n  }\r\n \r\n\r\n  .btn-primary.dropdown-toggle:focus{\r\n    background-color: transparent !important;\r\n    color :#716e6e;\r\n  }\r\n \r\n\r\n  .btn-primary.dropdown-toggle:hover {\r\n    background-color: transparent !important;\r\n    color :#716e6e;\r\n    \r\n  }\r\n \r\n\r\n  .dropdown-item:hover{\r\n  color:white !important;\r\n  }\r\n \r\n\r\n  #options.dropdown-menu.show{\r\n    transform: translate3d(-45px, 33px, 0px);\r\n\r\n  }\r\n \r\n\r\n  .btn{\r\n  text-transform:capitalize !important;\r\n  padding: 0.38rem 0.5rem;\r\n  }\r\n \r\n\r\n  i {\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: #f6f8f9cc;\r\n    font-size: 12px;\r\n    border: 1.5px solid #f6f8f9cc;\r\n    border-radius: 50% !important;\r\n    padding: 3px 4px;\r\n    float: right;\r\n  \r\n    }\r\n \r\n\r\n  .dropdown {\r\n    position: inherit !important;\r\n    padding: 21px;\r\n\r\n}\r\n \r\n\r\n  #chn{\r\n  cursor: pointer;\r\n}\r\n \r\n\r\n  table{\r\n\r\n  color: white !important;\r\n}\r\n \r\n\r\n  table th{\r\n\r\n  font-size :13.7px;\r\n}\r\n \r\n\r\n  .card.tb{\r\n  margin-top: 11px !important;\r\n  max-height:260px; \r\n  overflow: auto ;\r\n  opacity: 0.6;\r\n\r\n  background:linear-gradient(160deg,#006894,#006894)!important;\r\n}\r\n \r\n\r\n  .list-group-item{\r\n  background-color: transparent;\r\n  color: white;\r\n  border-top: none;\r\n  border: none;\r\n   margin-top: 4px;\r\n  padding: 9px;\r\n  font-size: 14px;\r\n}\r\n \r\n\r\n  h4{\r\n  padding-top: 10px !important;\r\n\r\n  padding-left: 9px !important;\r\n}\r\n \r\n\r\n  .card.sc{\r\n    \r\n  background-color: #4193b7ad;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzMS9vcmRlcnMxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDRCQUE0QjtNQUMxQiw2QkFBNkI7O0VBRWpDO0VBQ0E7O0lBRUUseUJBQXlCOztJQUV6QjtFQUNGOztJQUVFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQztFQUNFOztJQUVFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFDRjtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7Ozs7OztPQU1PO0lBQ0g7TUFDRSx3Q0FBd0M7O0lBRTFDOzs7RUFHRjs7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCOzs7RUFHQTtNQUNFLGFBQWE7TUFDYixZQUFZO01BQ1osNkJBQTZCO01BQzdCLHVCQUF1QjtNQUN2Qiw2QkFBNkI7TUFDN0IsV0FBVztNQUNYLGtDQUFrQztNQUNsQywyQkFBMkI7RUFDL0I7OztFQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsV0FBVztJQUNmOzs7RUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO0lBQ2pCOzs7RUFDQTtRQUNJLGFBQWE7UUFDYjs7O0VBRUE7O1lBRUksb0NBQW9DOzs7VUFHdEM7OztFQUNBO1lBQ0UsMkJBQTJCOztVQUU3Qjs7O0VBQ0E7WUFDRSxZQUFZO1lBQ1osZUFBZTtVQUNqQjs7O0VBQ0E7WUFDRSxlQUFlO1FBQ25CLGdCQUFnQjs7VUFFZDs7O0VBQ0E7WUFDRSxpQ0FBaUM7WUFDakMsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLDBCQUEwQjtZQUMxQixlQUFlOztVQUVqQjs7O0VBRVY7SUFDSSwyQkFBMkI7SUFDM0Isc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCOzs7RUFDQTtFQUNBLFVBQVU7RUFDVjs7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7OztFQUNBO01BQ0kscUJBQXFCO01BQ3JCLDBCQUEwQjtFQUM5Qjs7O0VBRUM7SUFDQyx3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7OztFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLGNBQWM7RUFDaEI7OztFQUNDO0lBQ0Msd0NBQXdDO0lBQ3hDLGNBQWM7O0VBRWhCOzs7RUFDQTtFQUNBLHNCQUFzQjtFQUN0Qjs7O0VBRUE7SUFDRSx3Q0FBd0M7O0VBRTFDOzs7RUFFRjtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkI7OztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVo7OztFQUlGO0lBQ0UsNEJBQTRCO0lBQzVCLGFBQWE7O0FBRWpCOzs7RUFDQTtFQUNFLGVBQWU7QUFDakI7OztFQUNBOztFQUVFLHVCQUF1QjtBQUN6Qjs7O0VBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COzs7RUFDQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7O0VBRVosNERBQTREO0FBQzlEOzs7RUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7R0FDWCxlQUFlO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7RUFDQTtFQUNFLDRCQUE0Qjs7RUFFNUIsNEJBQTRCO0FBQzlCOzs7RUFDQTs7RUFFRSwyQkFBMkI7O0FBRTdCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzMS9vcmRlcnMxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaXtcclxuICAgIGZvbnQtc2l6ZTogMTAuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDIuOHB4IDNweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLmhlcm8tbWVzc2FnZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBcclxuICAgIG1pbi13aWR0aDogOTIlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICB9XHJcbiAgdGFibGUgdGh7XHJcblxyXG4gICAgZm9udC1zaXplIDoxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgze1xyXG4gICAgZm9udC1zaXplOiAyMC41cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbC1tZC00LmJ0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQxcHg7XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzMXB4O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLnRiIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xyXG4gICAgbWF4LWhlaWdodDogMTUycHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuICAuY2FyZC5sZWZ0e1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB3aWR0aDogODglO1xyXG4gIH1cclxuLmNhcmQuc2N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTZjMiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiA5MS45JTtcclxuICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbi8qICAgXHJcbiAgICAjY2hue1xyXG5cclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC04MHB4O1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgIH0gKi9cclxuICAgICNvcHRpb25zLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTNweCwgMjZweCwgMHB4KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiBcclxuXHJcbiAgLmhlcm8tbWVzc2FnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ODk0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5wdXRUZXh0Q2xhc3N7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY2FyZXQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDEuM3B4IHNvbGlkICNkYWQzZDM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gICAgLmNhcmQtaGVhZGVyLmhlYWR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MTZlNmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkuc2l4e1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEzcmVtOztcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJ0bi5idG4tcHJpbWFyeS5idG4tcm91bmRlZC53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHR7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NTlhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICAjMjc5NTlhO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiNkcm9wZG93bk1lbnU1LmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNkcm9wZG93bk1lbnU1LmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiM3MTZlNmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMC44cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICAjMjc5NTlhO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgLyogbWFyZ2luOiAwICFpbXBvcnRhbnQ7ICovXHJcbiAgfVxyXG5cclxuICAgLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3MTZlNmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciA6IzcxNmU2ZTtcclxuICB9XHJcbiAgIC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yIDojNzE2ZTZlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbiAgI29wdGlvbnMuZHJvcGRvd24tbWVudS5zaG93e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDVweCwgMzNweCwgMHB4KTtcclxuXHJcbiAgfVxyXG4gIFxyXG4uYnRue1xyXG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjM4cmVtIDAuNXJlbTtcclxuICB9XHJcbiAgaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2Y2ZjhmOWNjO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjZmOGY5Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIxcHg7XHJcblxyXG59XHJcbiNjaG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRhYmxle1xyXG5cclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB0aHtcclxuXHJcbiAgZm9udC1zaXplIDoxMy43cHg7XHJcbn1cclxuLmNhcmQudGJ7XHJcbiAgbWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6MjYwcHg7IFxyXG4gIG92ZXJmbG93OiBhdXRvIDtcclxuICBvcGFjaXR5OiAwLjY7XHJcblxyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE2MGRlZywjMDA2ODk0LCMwMDY4OTQpIWltcG9ydGFudDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaDR7XHJcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC5zY3tcclxuICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTkzYjdhZDtcclxuICBcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/orders1/orders1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/orders1/orders1.component.ts ***!
  \**********************************************/
/*! exports provided: Orders1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders1Component", function() { return Orders1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Orders1Component = class Orders1Component {
    constructor() { }
    ngOnInit() {
        var Nameid;
        var Val1;
        $(function ($) {
            $('#chn').click(function () {
                if ($("#chn").hasClass('fa fa-minus')) {
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                }
                else {
                    $("#chn").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#scan').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn4").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan1').slideUp();
                    $('#scan2').slideUp();
                    $('#scan3').slideUp();
                    $('#scan4').slideUp();
                }
            });
            $('#chn1').click(function () {
                if ($("#chn1").hasClass('fa fa-minus')) {
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan1').slideUp();
                }
                else {
                    $("#chn1").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#scan1').slideToggle();
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn4").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan2').slideUp();
                    $('#scan3').slideUp();
                    $('#scan4').slideUp();
                }
            });
            $('#chn2').click(function () {
                if ($("#chn2").hasClass('fa fa-minus')) {
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan2').slideUp();
                }
                else {
                    $("#chn2").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#scan2').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn4").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan1').slideUp();
                    $('#scan3').slideUp();
                    $('#scan4').slideUp();
                }
            });
            $('#chn3').click(function () {
                if ($("#chn3").hasClass('fa fa-minus')) {
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan3').slideUp();
                }
                else {
                    $("#chn3").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#scan3').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn4").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan1').slideUp();
                    $('#scan2').slideUp();
                    $('#scan4').slideUp();
                }
            });
            $('#chn4').click(function () {
                if ($("#chn4").hasClass('fa fa-minus')) {
                    $("#chn4").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan4').slideUp();
                }
                else {
                    $("#chn4").removeClass('fa fa-plus').addClass('fa fa-minus');
                    Val1 = $(this).attr('id');
                    $('#scan4').slideToggle();
                    $("#chn1").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn2").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn3").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $("#chn").removeClass('fa fa-minus').addClass('fa fa-plus');
                    $('#scan').slideUp();
                    $('#scan1').slideUp();
                    $('#scan2').slideUp();
                    $('#scan3').slideUp();
                }
            });
        });
        $(function ($) {
            $(".inputTextClass").click(function () {
                $('input[type="text"]').val('');
            });
        });
        function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                // closeAllLists();
                if (!val) {
                    return false;
                }
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            var selValue = this.getElementsByTagName("input")[0].value;
                            inp.value = selValue;
                            console.log(selValue);
                            console.log(Val1);
                            if (Val1 == "chn") {
                                $('#exp1').show(450);
                                var $item = $('<tr class="ani" id="row"><td>' + selValue + '</td><td>' + "Yes" + '</td><td>' + "<input class='form-control' type='text'  style='margin-left: -9px;width: 43px;background-color:transparent;height: 17px; box-shadow: none; color: white; border: none; border-bottom: 1.5px solid #ffffffc7;border-radius: 0;'/>" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:66px;cursor:pointer; margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Routine</option><option style='color:black;'>Stat</option></select>" + '</td><td>' + "<select class='form-control' style='    margin-top: -5px;box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Banjara Demo</option><option style='color:black;'>Blood Bank</option></select>" + '</td><td>' + "<img data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img title='close' data-placement='bottom'  width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' />" + '</td></tr>').hide();
                                $('#current').append($item).show();
                                $item.show('slow');
                            }
                            else if (Val1 == "chn1") {
                                $('#exp2').show(450);
                                var $item1 = $('<tr id="row"><td>' + selValue + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>As Needed</option><option style='color:black;'>Once a Day</option><option style='color:black;'>Twise a Day</option><option style='color:black;'>One Per Week</option></select>" + '</td><td>' + "<input class='form-control' type='text'  style='margin-left: 10px;width: 54px;background-color:transparent;height: 17px; box-shadow: none; color: white; border: none; border-bottom: 1.5px solid #ffffffc7;border-radius: 0;'/>" + '</td><td>' + "26" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>As Instructed</option><option style='color:black;'>After Dinner</option><option style='color:black;'>Before Food</option><option style='color:black;'>At Bedtime</option></select>" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:66px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Routine</option><option style='color:black;'>Stat</option></select>" + '</td><td>' + "15" + '</td><td>' + "<img   data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img  data-placement='bottom'  width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' title='close'/>" + '</td></tr>');
                                $('#drugtb').append($item1).show();
                                $item1.show('slow');
                            }
                            else if (Val1 == "chn2") {
                                $('#exp3').show(350);
                                var $item2 = $('<tr id="row"><td>' + selValue + '</td><td>' + "100.00" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Banjara Demo</option><option style='color:black;'>Blood Bank</option></select>" + '</td><td>' + "<img  data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img data-placement='bottom'  width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' title='close'/>" + '</td></tr>');
                                $('#packagetb').append($item2).show();
                                $item2.show('slow');
                            }
                            else if (Val1 == "chn3") {
                                $('#exp4').show(350);
                                var $item3 = $('<tr id="row"><td>' + selValue + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Nursing Charges</option><option style='color:black;'>Nutrition Service</option><option style='color:black;'>Registration Fees</option></select>" + '</td><td>' + "<input class='form-control'   type='text' style='margin-left: -5px;width: 46px;background-color:transparent;height: 17px; box-shadow: none; color: white; border: none; border-bottom: 1.5px solid #ffffffc7;border-radius: 0;'/>" + '</td><td>' + "1000" + '</td><td>' + "2000" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:66px;cursor:pointer;margin-top: -5px;height: 23px;border-bottom: 1.5px solid #ffffffbf;'><option style='color:black;'>Select</option><option style='color:black;'>Routine</option><option style='color:black;'>Stat</option></select>" + '</td><td>' + "<select class='form-control' style='box-shadow:none;display:block !important; background-color: transparent; color: white;border: none;border-radius: 0;padding:0;width:116px;cursor:pointer;height: 23px;border-bottom: 1.5px solid #ffffffbf;margin-top: -5px;'><option style='color:black;margin-top: -5px;'>Select</option><option style='color:black;'>Bed Charges</option><option style='color:black;'>Banjara Demo</option></select>" + '</td><td>' + "<img  data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img  data-placement='bottom'  title='close' width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' />" + '</td></tr>');
                                $('#directtb').append($item3).show();
                                $item3.show('slow');
                            }
                            else if (Val1 == "chn4") {
                                $('#exp5').show(350);
                                var $item4 = $('<tr id="row"><td>' + selValue + '</td><td>' + "<input class='form-control'  type='text' style='margin-left: -5px;width: 46px;background-color:transparent;height: 19px; box-shadow: none; color: white; border: none; border-bottom: 2px solid #ffffffc7;border-radius: 0;'/>" + '</td><td>' + "<img data-placement='bottom'  width='23px' style='cursor:pointer;border-radius:50%;'  src='assets/images/pencil.png' title='Edit'/><img  data-placement='bottom' title='close'  width='16px' style='cursor:pointer;border-radius:50%;position: relative;right: -5px;'  src='assets/images/close.jpg' />" + '</td></tr>');
                                $('#ordertb').append($item4).show();
                                $item4.show('slow');
                            }
                            // closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                // if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                }
                else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x)
                            x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x)
                    return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length)
                    currentFocus = 0;
                if (currentFocus < 0)
                    currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }
        /*An array containing all the country names in the world:*/
        var sevices = ["ADMINISTRATIVE CHARGES", "AMINOLEVULINIC ACID (RANDOM)-URINE", "AMINOLEVULINIC ACID (24HR, URINE)-5", "ALPHA-HYDROXYPROGESTERONE-17", "BED ROLL CHARGES", " BLOOD PRESSURE CHECKUP", "CATH-033 - 2-WIRE EP STUDY", "COOLER (CALENDER DAY)", "DISPOSABLE BED SHEET", "DRIED BLOOD SPOT", "DISPOSABLE PILLOW COVER", " FACILITATION CHARGES - B", "FOOD AND BEVARAGES"];
        var drugs = ["Acetaminophen", "Adderall", "Amoxicillin", "Bactroban", "Basaglar", "Belbuca", "Belsomra", "Belviq", "Benadryl", "Cardizem", "Carvedilol", "Cefdinir", "Ceftriaxone", "Cefuroxime"];
        var packages = ["AMNIOCENTESIS", "AMNIODRAINAGE", "BABYS BILL-[TWIN SHARING]", "COLPOSCOPY WITH LEEP", "DIETARY MONTHLY PACKAGE", "FULL BODY PACKAGE", "WELLNESS PACKAGE"];
        var directs = ["ASSISTANT SURGEON FEE", "BLOOD COMPONENTS", "INACTIVE", "LASER CHARGES", "LR CHARGES", "LTP DONOR BILL", "OPD CONSULTATION FEE", "OT RENT MINOR", " THERAPEUTIC PHLEBOTOMY"];
        var sets = ["Antenatal Booking Bloods", "Acute chest pain", "Breast Sentinel node", "Breast Bloods", "Breast one stop both", "ED Trauma", "ED Poisoning", "Fracture of Humerus"];
        /*initiate the autocomplete function on the "service" element, and pass along the sevices array as possible autocomplete values:*/
        autocomplete(document.getElementById("service1"), sevices);
        autocomplete(document.getElementById("drug1"), drugs);
        autocomplete(document.getElementById("package1"), packages);
        autocomplete(document.getElementById("direct1"), directs);
        autocomplete(document.getElementById("set1"), sets);
    }
};
Orders1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders1/orders1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders1.component.css */ "./src/app/orders1/orders1.component.css")).default]
    })
], Orders1Component);



/***/ }),

/***/ "./src/app/translate.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/translate.pipe.ts ***!
  \***********************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");



let TranslatePipe = class TranslatePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(key) {
        return this.translate.data[key] || key;
    }
};
TranslatePipe.ctorParameters = () => [
    { type: _translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'translate',
        pure: false
    })
], TranslatePipe);



/***/ }),

/***/ "./src/app/translate.service.ts":
/*!**************************************!*\
  !*** ./src/app/translate.service.ts ***!
  \**************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TranslateService = class TranslateService {
    constructor(http) {
        this.http = http;
        this.data = {};
    }
    use(lang) {
        return new Promise((resolve, reject) => {
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            this.http.get(langPath).subscribe(translation => {
                this.data = Object.assign({}, translation || {});
                resolve(this.data);
            }, error => {
                this.data = {};
                resolve(this.data);
            });
        });
    }
};
TranslateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TranslateService);



/***/ }),

/***/ "./src/app/vitals/vitals.component.css":
/*!*********************************************!*\
  !*** ./src/app/vitals/vitals.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control{\r\n    box-shadow: none !important;\r\n    \r\n    \r\n    }\r\n    input.mat-input-element {\r\n        margin-top: -1.0625em !important;\r\n    }\r\n    .md-form{\r\n        margin-bottom: 1.7rem !important;\r\n        margin-top: -0.1rem !important;\r\n        \r\n    }\r\n    .mat-form-field-wrapper{\r\n\r\n        margin-bottom:-10px !important;\r\n    }\r\n    mat-form-field{\r\n\r\n        margin-bottom: -10px;\r\n    }\r\n    ::-webkit-scrollbar { \r\n        display: none; \r\n        }\r\n    .hero-message::before {\r\n            content: \"\";\r\n            display: block;\r\n            position: absolute;\r\n            border-radius: 4px;\r\n            margin-left: 0px;\r\n            min-width: 92.3%;\r\n            border-radius: 4px;\r\n            height: 2.5rem;\r\n            z-index: -1;\r\n            opacity: 0.5;\r\n            background-color: #006894;\r\n            }\r\n    .list-group-item{\r\n                background-color: transparent;\r\n                color: white;\r\n                border-top: none;\r\n                 margin-top: 4px;\r\n                 border: none;\r\n                padding: 9px;\r\n                font-size: 14px;\r\n              }\r\n    h4{\r\n                padding-top: 10px !important;\r\n              \r\n                padding-left: 9px !important;\r\n              }\r\n    .cdk-text-field-autofill-monitored{\r\n                background-color: transparent !important;\r\n            }\r\n    .card.tb{\r\n                    margin-top: -14px;\r\n                    max-height:313px; \r\n                    overflow: auto ;\r\n                    opacity: 0.6;\r\n                    background:linear-gradient(160deg,#006894,#006894) !important;\r\n                  }\r\n    h3{\r\n                    margin-top: 4px;\r\n                  }\r\n    @media only screen and (max-width: 600px) {\r\n                .card.tb{\r\n                    max-height: 11rem !important;\r\n                    overflow: auto;\r\n                    margin-top: -15px;\r\n                }\r\n            h3{\r\n\r\n                margin-left: 8px;\r\n                font-size: 20px;\r\n                margin-top:  6px !important;\r\n            }\r\n            h2{\r\n                font-size: 22px;\r\n                margin-top: 10px;\r\n              }\r\n            .hero-message::before {\r\n              \r\n                min-width: 92%;\r\n            \r\n                }\r\n\r\n            }\r\n    /* .lgi-custom:hover {\r\n            background: rgba(239, 239, 239, 0.5)!important;\r\n            transform: scale(1.05, 1.1);\r\n            color: #666666 !important;}\r\n   */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdml0YWxzL3ZpdGFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCOzs7SUFHM0I7SUFDQTtRQUNJLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksZ0NBQWdDO1FBQ2hDLDhCQUE4Qjs7SUFFbEM7SUFDQTs7UUFFSSw4QkFBOEI7SUFDbEM7SUFDQTs7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGFBQWE7UUFDYjtJQUNBO1lBQ0ksV0FBVztZQUNYLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsWUFBWTtZQUNaLHlCQUF5QjtZQUN6QjtJQUNBO2dCQUNJLDZCQUE2QjtnQkFDN0IsWUFBWTtnQkFDWixnQkFBZ0I7aUJBQ2YsZUFBZTtpQkFDZixZQUFZO2dCQUNiLFlBQVk7Z0JBQ1osZUFBZTtjQUNqQjtJQUNBO2dCQUNFLDRCQUE0Qjs7Z0JBRTVCLDRCQUE0QjtjQUM5QjtJQUVIO2dCQUNLLHdDQUF3QztZQUM1QztJQUVJO29CQUNJLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLFlBQVk7b0JBQ1osNkRBQTZEO2tCQUMvRDtJQUNBO29CQUNFLGVBQWU7a0JBQ2pCO0lBR047Z0JBQ0k7b0JBQ0ksNEJBQTRCO29CQUM1QixjQUFjO29CQUNkLGlCQUFpQjtnQkFDckI7WUFDSjs7Z0JBRUksZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLDJCQUEyQjtZQUMvQjtZQUNBO2dCQUNJLGVBQWU7Z0JBQ2YsZ0JBQWdCO2NBQ2xCO1lBQ0Y7O2dCQUVJLGNBQWM7O2dCQUVkOztZQUVKO0lBQ0E7Ozs7SUFJUiIsImZpbGUiOiJzcmMvYXBwL3ZpdGFscy92aXRhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjA2MjVlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1kLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206LTEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlcm8tbWVzc2FnZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDkyLjMlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ODk0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC50YntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjMxM3B4OyBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0byA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE2MGRlZywjMDA2ODk0LCMwMDY4OTQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgLmNhcmQudGJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICA2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVyby1tZXNzYWdlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiAubGdpLWN1c3RvbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC41KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4xKTtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY2NjYgIWltcG9ydGFudDt9XHJcbiAgICovIl19 */");

/***/ }),

/***/ "./src/app/vitals/vitals.component.ts":
/*!********************************************!*\
  !*** ./src/app/vitals/vitals.component.ts ***!
  \********************************************/
/*! exports provided: VitalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitalsComponent", function() { return VitalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VitalsComponent = class VitalsComponent {
    constructor() { }
    ngOnInit() {
        $(function ($) {
            $("li").click(function () {
                var newVal1 = $(this).text();
                if (newVal1 == "General Vitals") {
                    $("#general-vitals").show(450);
                    $("#cardiac-vitals").hide();
                    $("#pediatric-vitals").hide();
                    $("#er-vitals").hide();
                    $("#ot-parameters").hide();
                }
                else if (newVal1 == "Cardiac Vitals") {
                    $("#general-vitals").hide();
                    $("#cardiac-vitals").show(450);
                    $("#pediatric-vitals").hide();
                    $("#er-vitals").hide();
                    $("#ot-parameters").hide();
                }
                else if (newVal1 == "Pediatric Vitals") {
                    $("#general-vitals").hide();
                    $("#cardiac-vitals").hide();
                    $("#pediatric-vitals").show(450);
                    $("#er-vitals").hide();
                    $("#ot-parameters").hide();
                }
                else if (newVal1 == "ER Vitals") {
                    $("#general-vitals").hide();
                    $("#cardiac-vitals").hide();
                    $("#pediatric-vitals").hide();
                    $("#er-vitals").show(450);
                    $("#ot-parameters").hide();
                }
                else if (newVal1 == "OT Parameters") {
                    $("#general-vitals").hide();
                    $("#cardiac-vitals").hide();
                    $("#pediatric-vitals").hide();
                    $("#er-vitals").hide();
                    $("#ot-parameters").show(450);
                }
            });
        });
    }
};
VitalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vitals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vitals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vitals/vitals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vitals.component.css */ "./src/app/vitals/vitals.component.css")).default]
    })
], VitalsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\pwa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map