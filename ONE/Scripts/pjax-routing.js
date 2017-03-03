var TownSuite;
(function (TownSuite) {
    var inst_sr;
    $(document).pjax('a[data-pjax]', '.mypjaxcontainer');
    $(document).on('ready pjax:success pjax:popstate', function () {
        if (inst_sr) {
            inst_sr = inst_sr.destroy();
        }
        $.pjax.defaults.timeout = 5000;
        var pathname = window.location.pathname.toLowerCase();
        if (pathname == "/" || pathname == "/home" || pathname == "/home/index") {
            inst_sr = new TownSuite.LandingPage.FeedPanel(TownSuite.LandingPage.Filter.All, TownSuite.Modules.EnableRecreationPortal(), true);
        }
        else if (pathname == "/customer") {
            inst_sr = new TownSuite.Customer.Summary2();
        }
        else if (pathname == "/events") {
            inst_sr = new TownSuite.Events.Search("");
            inst_sr.Init();
            $("#events").addClass("in");
        }
        else if (pathname == "/events/info") {
            inst_sr = new TownSuite.Events.Details();
            inst_sr.Init();
            inst_sr.InitRegularView();
        }
        else if (pathname == "/events/info/recommendation") {
            inst_sr = new TownSuite.Events.Recommendations(TownsuiteHelpers.GetQueryStringParams("eventid").split("|"));
        }
        else if (pathname == "/events/participant/ticket") {
            inst_sr = new TownSuite.Events.RecMyCourses.ViewTicket();
        }
        else if (pathname == "/events/participant/waiver") {
            inst_sr = new TownSuite.Events.RecMyCourses.Waiver();
        }
        else if (pathname == "/issue") {
            inst_sr = new TownSuite.Issue.ComplaintsView();
            inst_sr.Init();
        }
        else if (pathname == "/issue/view") {
            inst_sr = new TownSuite.Issue.ViewDetails();
        }
        else if (pathname == "/financial/home") {
            inst_sr = new TownSuite.Financial.Home();
        }
        else if (pathname == "/financial/tca") {
            $(document).pjax('#townsuite_financial_tca_home a', '.mypjaxcontainer');
        }
        else if (pathname == "/financial/tca/reportadditions") {
            inst_sr = new TownSuite.Financial.TCA.Reports.Additions();
        }
        else if (pathname == "/financial/po/rqapprove" || pathname == "//financial/po/rqapprove") {
            inst_sr = new TownSuite.Financial.Po.RqQpprove();
        }
    });
    $(document).on('pjax:start', function () {
        NProgress.start();
    });
    $(document).on('pjax:end', function () {
        NProgress.done();
    });
})(TownSuite || (TownSuite = {}));
//# sourceMappingURL=pjax-routing.js.map