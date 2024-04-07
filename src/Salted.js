import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

function Salted() {
	const [inputString, setInputString] = useState("");
	const [randomSalt, setRandomSalt] = useState("");
	const [md5Hash, setMD5Hash] = useState("");
	const [md5HashWithSalt, setMD5HashWithSalt] = useState("");
	const [inputMd5Hash, setInputMd5Hash] = useState("");
	const [decodedText, setDecodedText] = useState("");

	const generateRandomSalt = () => {
		const salt = Math.random().toString(36).substring(2, 10);
		setRandomSalt(salt);
	};

	const handleInputChange = (e) => {
		setInputString(e.target.value);
	};

	const handleAddSaltClick = () => {
		generateRandomSalt();
	};

	const handleMd5InputChange = (e) => {
		setInputMd5Hash(e.target.value);
	};

	const handleMd5HashSubmission = () => {
		if (inputMd5Hash === md5Hash) {
			setDecodedText(inputString);
		} else if (inputMd5Hash === md5HashWithSalt) {
			setDecodedText(inputString + randomSalt);
		} else {
			setDecodedText("No matching MD5 hash found!");
		}
	};

	useEffect(() => {
		if (randomSalt !== "") {
			const md5HashValue = CryptoJS.MD5(inputString).toString();
			const md5HashWithSaltValue = CryptoJS.MD5(
				inputString + randomSalt
			).toString();
			setMD5Hash(md5HashValue);
			setMD5HashWithSalt(md5HashWithSaltValue);
		}
	}, [randomSalt, inputString]); // Include inputString as a dependency

	return (
		<div>
			<h2>Salting MD5</h2>
			<div>
				<label htmlFor="inputString">Input String:</label>
				<input
					type="text"
					id="inputString"
					value={inputString}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<button onClick={handleAddSaltClick}>Salt the password</button>
			</div>
			<div>
				<h3>Random Salt:</h3>
				<p>{randomSalt}</p>
			</div>
			<div>
				<h3>MD5 Hash of Inputed String:</h3>
				<p>{md5Hash}</p>
			</div>
			<div>
				<h3>MD5 Hash of Inputed String with Salt:</h3>
				<p>{md5HashWithSalt}</p>
			</div>
			<div>
				<label htmlFor="inputMd5Hash">Input MD5 Hash:</label>
				<input
					type="text"
					id="inputMd5Hash"
					value={inputMd5Hash}
					onChange={handleMd5InputChange}
				/>
				<button onClick={handleMd5HashSubmission}>Decode</button>
			</div>
			<div>
				<h3>Decoded Text:</h3>
				<p>{decodedText}</p>
			</div>
		</div>
	);
}

export default Salted;
