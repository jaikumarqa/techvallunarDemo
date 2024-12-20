const TEST_ENV = {
    BASEURL: 'http://www.douglas.de/de',
    TESTDATA: require('../resources/testData/test.data.json'),
};

const STAGE_ENV = {
    BASEURL: 'http://www.douglas.de/de',
    TESTDATA: require('../resources/testData/stage.data.json'),
};

const PROD_ENV = {
    BASEURL: 'http://www.douglas.de/de',
    TESTDATA: require('../resources/testData/prod.data.json'),
};

const LOCAL_ENV = {
    BASEURL: 'https://localhost:4500/',
    TESTDATA: require('../resources/testData/test.data.json'),
};

const DEV_ENV = {
    BASEURL: 'http://www.douglas.de/de',
    TESTDATA: require('../resources/testData/test.data.json'),
};

export { LOCAL_ENV, DEV_ENV, TEST_ENV, STAGE_ENV, PROD_ENV };