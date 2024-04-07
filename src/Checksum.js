import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";

function Checksum() {
	const [inputString1, setInputString1] = useState("");
	const [inputString2, setInputString2] = useState("");
	const [fileInput1, setFileInput1] = useState(null);
	const [fileInput2, setFileInput2] = useState(null);
	const [hashedMD5_1, setHashedMD5_1] = useState("");
	const [hashedMD5_2, setHashedMD5_2] = useState("");
	const [hashedSHA256_1, setHashedSHA256_1] = useState("");
	const [hashedSHA256_2, setHashedSHA256_2] = useState("");
	const [hashedSHA512_1, setHashedSHA512_1] = useState("");
	const [hashedSHA512_2, setHashedSHA512_2] = useState("");
	const [comparisonResult, setComparisonResult] = useState("");

	useEffect(() => {
		// Compare the hash values
		if (
			hashedMD5_1 &&
			hashedMD5_2 &&
			hashedSHA256_1 &&
			hashedSHA256_2 &&
			hashedSHA512_1 &&
			hashedSHA512_2
		) {
			if (
				hashedMD5_1 === hashedMD5_2 &&
				hashedSHA256_1 === hashedSHA256_2 &&
				hashedSHA512_1 === hashedSHA512_2
			) {
				setComparisonResult("Hash values match.");
			} else {
				setComparisonResult("Hash values do not match.");
			}
		} else {
			setComparisonResult("");
		}
	}, [
		hashedMD5_1,
		hashedMD5_2,
		hashedSHA256_1,
		hashedSHA256_2,
		hashedSHA512_1,
		hashedSHA512_2,
	]);

	const handleInputChange1 = (e) => {
		setInputString1(e.target.value);
	};

	const handleInputChange2 = (e) => {
		setInputString2(e.target.value);
	};

	const handleFileChange1 = (e) => {
		const file = e.target.files[0];
		setFileInput1(file);
	};

	const handleFileChange2 = (e) => {
		const file = e.target.files[0];
		setFileInput2(file);
	};

	const handleHashClick = () => {
		if (inputString1) {
			const hashMD5 = CryptoJS.MD5(inputString1).toString();
			const hashSHA256 = CryptoJS.SHA256(inputString1).toString();
			const hashSHA512 = CryptoJS.SHA512(inputString1).toString();

			setHashedMD5_1(hashMD5);
			setHashedSHA256_1(hashSHA256);
			setHashedSHA512_1(hashSHA512);
		}

		if (fileInput1) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const fileContent = event.target.result;
				const hashMD5 = CryptoJS.MD5(fileContent).toString();
				const hashSHA256 = CryptoJS.SHA256(fileContent).toString();
				const hashSHA512 = CryptoJS.SHA512(fileContent).toString();

				setHashedMD5_1(hashMD5);
				setHashedSHA256_1(hashSHA256);
				setHashedSHA512_1(hashSHA512);
			};
			reader.readAsText(fileInput1);
		}

		if (inputString2) {
			const hashMD5 = CryptoJS.MD5(inputString2).toString();
			const hashSHA256 = CryptoJS.SHA256(inputString2).toString();
			const hashSHA512 = CryptoJS.SHA512(inputString2).toString();

			setHashedMD5_2(hashMD5);
			setHashedSHA256_2(hashSHA256);
			setHashedSHA512_2(hashSHA512);
		}

		if (fileInput2) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const fileContent = event.target.result;
				const hashMD5 = CryptoJS.MD5(fileContent).toString();
				const hashSHA256 = CryptoJS.SHA256(fileContent).toString();
				const hashSHA512 = CryptoJS.SHA512(fileContent).toString();

				setHashedMD5_2(hashMD5);
				setHashedSHA256_2(hashSHA256);
				setHashedSHA512_2(hashSHA512);
			};
			reader.readAsText(fileInput2);
		}
	};

	const handleReset = () => {
		setInputString1("");
		setInputString2("");
		setFileInput1(null);
		setFileInput2(null);
		setHashedMD5_1("");
		setHashedMD5_2("");
		setHashedSHA256_1("");
		setHashedSHA256_2("");
		setHashedSHA512_1("");
		setHashedSHA512_2("");
		setComparisonResult("");
	};

	return (
		<div className="App">
			<h1>Checksum - Verify the integrity of files</h1>
			<div>
				<div>
					<h2>Input 1</h2>
					<input
						type="text"
						placeholder="Enter a string"
						value={inputString1}
						onChange={handleInputChange1}
					/>
					<input type="file" onChange={handleFileChange1} />
				</div>
				<div>
					<h2>Input 2</h2>
					<input
						type="text"
						placeholder="Enter a string"
						value={inputString2}
						onChange={handleInputChange2}
					/>
					<input type="file" onChange={handleFileChange2} />
				</div>
				<button onClick={handleHashClick}>Generate & Compare Hashes</button>
				<button onClick={handleReset}>Reset</button>
			</div>
			<div>
				{hashedMD5_1 && hashedMD5_2 && (
					<div>
						<h2>MD5 Hashes:</h2>
						<p>Input 1: {hashedMD5_1}</p>
						<p>Input 2: {hashedMD5_2}</p>
					</div>
				)}
				{hashedSHA256_1 && hashedSHA256_2 && (
					<div>
						<h2>SHA-256 Hashes:</h2>
						<p>Input 1: {hashedSHA256_1}</p>
						<p>Input 2: {hashedSHA256_2}</p>
					</div>
				)}
				{hashedSHA512_1 && hashedSHA512_2 && (
					<div>
						<h2>SHA-512 Hashes:</h2>
						<p>Input 1: {hashedSHA512_1}</p>
						<p>Input 2: {hashedSHA512_2}</p>
					</div>
				)}
			</div>
			{comparisonResult && (
				<div>
					<h2>Comparison Result:</h2>
					<p>{comparisonResult}</p>
				</div>
			)}
		</div>
	);
}
export default Checksum;
