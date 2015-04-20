/*
Language: Splunk SPL 
Contributors: Xander Johnson <alexx.johnson@gmail.com>
Description: The scope of SPL includes data searching, filtering, modification, manipulation, insertion, and deletion.
*/

function(hljs) {
  return {
    case_insensitive: false,
    keywords: 'abstract accum addcoltotals addinfo addtotals analyzefields anomalies anomalousvalue append appendcols appendpipe arules associate audit autoregress bin bucket bucketdir chart cluster cofilter collect concurrency contingency convert correlate crawl datamodel dbinspect dedup delete delta diff erex eval eventcount eventstats extract (kv) fieldformat fields fieldsummary filldown fillnull findkeywords findtypes folderize foreach format gauge gentimes geostats head highlight history iconify input inputcsv inputlookup iplocation join kmeans kvform loadjob localize localop lookup makecontinuous makemv map metadata metasearch multikv multisearch mvcombine mvexpand nomv outlier outputcsv outputlookup outputtext overlap pivot predict rangemap rare regex relevancy reltime rename replace rest return reverse rex rtorder run savedsearch script scrub search searchtxn selfjoin set setfields sendemail sichart sirare sistats sitimechart sitop sort spath stats strcat streamstats table tags tail timechart top transaction transpose trendline tscollect tstats typeahead typelearner typer uniq untable where x11 xmlkv xmlunescape xpath xyseries',
    contains: [
      //
      // strings
      //
      {
        className: 'string',
        variants: [
          {
            begin: '"[^\r\n"]*"'
          }
        ]
      },
      // 
      // numbers
      //
      {
        className: 'numbers',
        variants: [
          {
            begin: '[0-9]'
          }
        ]
      },
    ]
  };
}
