(function () {

    var AggregationsViewModel = function() {

        var self = this;

        self.useCustomQuery = ko.observable(false);

        self.addMetric = function(){

            self.metrics.push({});
        };

        self.removeMetric = function(){
            self.metrics.remove(this);
        };

        self.addBucket = function(){

            self.buckets.push({});
        };

        self.removeBucket = function(){
            self.buckets.remove(this);
        };

        self.metrics = ko.observableArray([]);

        self.metricTypes = ko.observableArray([ "Count", "Sum", "Average", "Min", "Max", "Stats", "Extended Stats"]);
        self.selectedMetricType = ko.observable();

        self.metricFields = ko.observableArray([]);
        self.selectedMetricField = ko.observable();

        self.buckets = ko.observableArray([]);

        self.bucketTypes = ko.observableArray(["Date Range", "Date Histogram", "Range", "Terms"]);
        self.selectedBucketType = ko.observable();

        self.bucketFields = ko.observableArray([]);
        self.selectedBucketField = ko.observable();

        self.bucketDateRangeRanges = ko.observableArray([]);
        self.bucketRangeRanges = ko.observableArray([]);

        self.dateHistogramIntervals = ["Second", "Minute", "Hour", "Daily", "Weekly", "Monthly", "Yearly", "Custom"];

        self.customDateHistogramInterval = ko.observable();

        self.updateTableauConnectionData = function(connectionData){

        };

    };


    console.log(elasticsearchConnector);

    var vm = new AggregationsViewModel();
    ko.applyBindings(vm);

    vm.useCustomQuery.subscribe(function(newValue) {
        console.log("[Aggregations] Removing all metrics and buckets");
        
        vm.metrics.removeAll();
        vm.buckets.removeAll();
    });

    return vm;
})();