const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017/mydb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndQuery() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db();
    const collection = db.collection('todoList');

    // 데이터 조회, 삽입, 업데이트, 삭제 등의 작업 수행
    console.dir(collection)
      
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

connectAndQuery();