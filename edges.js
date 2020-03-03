// 准则 s知道t，t可以不知道s
// type属性枚举
//  is: 是的关系。 s 是 t
//  part:组合关系。 s的一部分是t。可选部分也是一部分
//  choice: 选项。 s的选项包含t。多个t中选择一个或多个的意思
//  own: 拥有。 s拥有t
//  unknown: 未知
var edges = [
    {
        source: "OLTP",
        type: 'unknown',
        target: "TiDB"
    }, {
        source: '商业智能',
        type: 'part',
        target: '决策层'
    }, {
        source: '商业智能',
        type: 'part',
        target: '提供服务的方法'
    }, {
        source: '提供服务的方法',
        type: 'part',
        target: '分析报表'
    }, {
        source: '提供服务的方法',
        type: 'part',
        target: '数据湖'
    }, {
        source: '提供服务的方法',
        type: 'part',
        target: '数据平台'
    }, {
        source: '商业智能',
        type: 'part',
        target: '使用对象'
    }, {
        source: '数据开发者',
        type: 'is',
        target: '使用对象'
    }, {
        source: '数据技术人员',
        type: 'is',
        target: '使用对象'
    }, {
        source: '数据分析师',
        type: 'is',
        target: '使用对象'
    }, {
        source: '商业智能',
        type: 'part',
        target: '商业智能产出物'
    }, {
        source: '商业智能产出物',
        type: 'part',
        target: '数据集'
    }, {
        source: '商业智能产出物',
        type: 'part',
        target: 'Data Set'
    }, {
        source: '商业智能产出物',
        type: 'part',
        target: 'Database as a Service'
    }, {
        source: '数据中台',
        type: 'part',
        target: '数据中台用户'
    }, {
        source: '数据中台用户',
        type: 'choice',
        target: '数据用户'
    }, {
        source: '数据中台用户',
        type: 'choice',
        target: '数据消费者'
    }, {
        source: '数据中台用户',
        type: 'choice',
        target: '业务系统'
    }, {
        source: '数据中台',
        type: 'part',
        target: '数据中台产品'
    }, {
        source: '数据中台产品',
        type: 'choice',
        target: 'Data API'
    }, {
        source: '数据中台产品',
        type: 'choice',
        target: '数据服务'
    }, {
        source: '数据仓库',
        type: 'is',
        target: 'Data Market'
    }, {
        source: '阿里中台',
        type: 'part',
        target: 'One Data'
    }, {
        source: '阿里中台',
        type: 'part',
        target: 'One Entity'
    }, {
        source: '阿里中台',
        type: 'part',
        target: 'One Service'
    }, {
        source: 'oRTP',
        type: 'is',
        target: 'RTP'
    }, {
        source: 'JRTP',
        type: 'is',
        target: 'RTP'
    }, {
        source: 'OLTP',
        type: 'is',
        target: '数据处理类型'
    }, {
        source: 'OLAP',
        type: 'is',
        target: '数据处理类型'
    }, {
        source: '数据仓库',
        type: 'unknown',
        target: 'OLAP'
    }, {
        source: 'DDD',
        type: 'unknown',
        target: 'Axon'
    }, {
        source: 'WebGL',
        type: 'part',
        target: 'JavaScript'
    }, {
        source: 'WebGL',
        type: 'part',
        target: 'HTML5'
    }, {
        source: 'WebGL',
        type: 'part',
        target: 'OpenGL'
    }, {
        source: 'ROLAP',
        type: 'is',
        target: 'OLAP'
    }, {
        source: 'MOLAP',
        type: 'is',
        target: 'OLAP'
    }, {
        source: 'HOLAP',
        type: 'is',
        target: 'OLAP'
    }, {
        source: '阿里',
        type: 'part',
        target: '阿里中台'
    }, {
        source: '阿里',
        type: 'part',
        target: 'DRDS'
    }, {
        source: 'facebook',
        type: 'own',
        target: 'Presto'
    }, {
        source: 'mondrian',
        type: 'is',
        target: 'ROLAP'
    }, {
        source: 'Presto',
        type: 'is',
        target: 'ROLAP'
    }, {
        source: 'DRDS',
        type: 'is',
        target: 'ROLAP'
    }, {
        source: 'Kylin',
        type: 'is',
        target: 'MOLAP'
    }, {
        source: 'Lylin',
        type: 'is',
        target: 'MOLAP'
    }, {
        source: 'pinot',
        type: 'is',
        target: 'MOLAP'
    }, {
        source: 'Druid',
        type: 'is',
        target: 'MOLAP'
    }, {
        source: 'apache',
        type: 'own',
        target: 'Kylin'
    }, {
        source: 'ebay',
        type: 'own',
        target: 'Lylin'
    }, {
        source: 'linkedin',
        type: 'own',
        target: 'pinot'
    }, {
        source: 'Presto',
        type: 'is',
        target: 'MPP'
    }, {
        source: 'Impala',
        type: 'is',
        target: 'MPP'
    }, {
        source: 'SparkSQL',
        type: 'is',
        target: 'MPP'
    }, {
        source: 'Drill',
        type: 'is',
        target: 'MPP'
    }, {
        source: 'Druid',
        type: 'is',
        target: '预计算系统'
    }, {
        source: 'Kylin',
        type: 'is',
        target: '预计算系统'
    }, {
        source: 'Elasticsearch',
        type: 'is',
        target: '搜索引擎系统'
    }, {
        source: 'OLAP',
        type: 'part',
        target: 'OLAP引擎'
    }, {
        source: 'MPP',
        type: 'is',
        target: 'OLAP引擎'
    }, {
        source: '预计算系统',
        type: 'is',
        target: 'OLAP引擎'
    }, {
        source: '搜索引擎系统',
        type: 'is',
        target: 'OLAP引擎'
    }, {
        source: 'XML-RPC',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'SOAP',
        type: 'is',
        target: 'XML-RPC'
    }, {
        source: 'JSON-RPC',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'CORBA',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'Java RMI',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'REST-RPC',
        type: 'is',
        target: 'RPC'
    }, {
        source: '数据湖',
        type: 'part',
        target: '数据沙箱'
    }, {
        source: 'Hadoop',
        type: 'is',
        target: '数据湖'
    }, {
        source: '数据湖',
        type: 'is',
        target: '数据存储技术'
    }, {
        source: '数据仓库',
        type: 'is',
        target: '数据存储技术'
    }, {
        source: 'Java',
        type: 'part',
        target: 'Java RMI'
    }, {
        source: 'Benchmark',
        type: 'is',
        target: 'HiBench'
    }, {
        source: 'HiBench',
        type: 'part',
        target: 'HiBench Support'
    }, {
        source: 'HiBench Support',
        type: 'is',
        target: 'Hadoop'
    }, {
        source: 'Spark',
        type: 'is',
        target: 'HiBench Support'
    }, {
        source: 'streaming workloads',
        type: 'is',
        target: 'HiBench Support'
    }, {
        source: 'Spark Streaming',
        type: 'is',
        target: 'streaming workloads'
    }, {
        source: 'Flink',
        type: 'is',
        target: 'streaming workloads'
    }, {
        source: 'Storm',
        type: 'is',
        target: 'streaming workloads'
    }, {
        source: 'Gearpump',
        type: 'is',
        target: 'streaming workloads'
    }, {
        source: 'JSON-WSP',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'gRPC',
        type: 'is',
        target: 'RPC'
    }, {
        source: 'RESTful',
        type: 'is',
        target: 'REST'
    }, {
        source: 'Web Service',
        type: 'choice',
        target: 'Ajax'
    }, {
        source: 'Web Service',
        type: 'choice',
        target: 'REST'
    }, {
        source: 'Web Service',
        type: 'choice',
        target: 'JSON-RPC'
    }, {
        source: 'Web Service',
        type: 'choice',
        target: 'JSON-WSP'
    }, {
        source: 'Ajax',
        type: 'choice',
        target: 'SOAP'
    }, {
        source: 'Ajax',
        type: 'choice',
        target: 'JSON'
    }, {
        source: 'SOA',
        type: 'part',
        target: 'Service-Based Technology'
    }, {
        source: 'Web Service',
        type: 'is',
        target: 'Service-Based Technology'
    }, {
        source: 'REST',
        type: 'is',
        target: 'Service-Based Technology'
    }, {
        source: 'CORBA',
        type: 'is',
        target: 'Service-Based Technology'
    }
];