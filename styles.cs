body {
  font-family: Arial, sans-serif;
  background: #e0f7fa;
  text-align: center;
  padding: 50px;
  transition: background 0.5s ease;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: auto;
}

input, button {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  width: 80%;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  background-color: #0288d1;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0277bd;
}

#weatherResult {
  margin-top: 20px;
}

#weatherResult img {
  margin-top: 10px;
}

#historyList {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

#historyList li {
  font-size: 14px;
  color: #555;
}
