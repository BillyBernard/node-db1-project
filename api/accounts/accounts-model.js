const db = require('../../data/db-config.js')


const getAll = () => {
  // DO YOUR MAGIC
  const result = await db("accounts");
  return result;
}

const getById = id => {
  // DO YOUR MAGIC
  const result = await db("accounts").where('id', id).first();
  return result;
}

const create = account => {
  // DO YOUR MAGIC
  const [ id ] = await db("accounts").insert(account);
  const account = await getById(id);
   return account;
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  await db("accounts").where('id', id).update(account);
  return getById(id);
}

const deleteById = id => {
  // DO YOUR MAGIC
  const result = db("accounts").where('id', id).delete();
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
