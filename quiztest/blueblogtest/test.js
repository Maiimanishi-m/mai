
		var count = 0;
		var q_count = 2;
		var qu = document.getElementById("question");
		var an = document.getElementById("answer");
		var anbt = document.getElementById("anbt");
		var Qnumber = document.getElementById("Qnumber");
		var buttons = document.getElementById("buttons");
		var footer = document.getElementById("inner_footer");
		var q_number = document.getElementById("q_number");
		var a_number = document.getElementById("a_number");
		var start_page = document.getElementById("start_page");

		function start(){
			start_page.classList.add("an");
		}

		show();

		function show(){
			qu.innerHTML = quiz[count][0];
		}
		function answer(){
			an.innerHTML = quiz[count][1];
			buttons.innerHTML = '<button type="button" class="button2" onclick="next()">次へ</button>';
			/*footer.innerHTML = '<button type="button" class="back_button" onclick="next()">戻る</button>';*/
		}

		function next(){
			var number = q_count++;
			q_number.innerHTML = "Q."+ number;
			a_number.innerHTML = "A."+ number;
			an.innerHTML = "";
			count++;
			show();
			buttons.innerHTML = '<button type="button" class="button" onclick="answer()">答え</button>';
		}
		function back(){
			count--;
			show();
			an.innerHTML = "";
			buttons.innerHTML = '<button type="button" class="button" onclick="answer()">答え</button>';
		}
