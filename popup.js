        $(document).ready(function() {
            loadEntries();

            $("#saveBtn").click(function() {
                saveEntry();
            });
        });

        function saveEntry() {
            var name = $("#entryName").val();
            var secret = $("#entrySecret").val();

            if (name && secret) {
                var entry = { name: name, secret: secret };

                var entries = JSON.parse(localStorage.getItem("entries"));
                if (!Array.isArray(entries)) {
                    entries = [];
                }

                entries.push(entry);

                localStorage.setItem("entries", JSON.stringify(entries));

                $("#entryName").val("");
                $("#entrySecret").val("");

                loadEntries();

                showAlert("Entry has been saved successfully.", "success");
            } else {
                showAlert("Please fill in all fields correctly.", "error");
            }
        }

        function removeEntry(index) {
            var entries = JSON.parse(localStorage.getItem("entries"));

            if (Array.isArray(entries)) {
                entries.splice(index, 1);

                localStorage.setItem("entries", JSON.stringify(entries));

                loadEntries();

                showAlert("Entry has been removed successfully.", "success");
            }
        }

        function generateOTP(secret, index) {
            $.ajax({
                url: "https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/2AuthSafer?secret=" + secret,
                success: function(data) {
                    var otpRegex = /otpauth:\/\/totp\/2AuthSafer\?secret=([A-Z0-9]+)/i;
                    var otpMatch = data.match(otpRegex);

                    if (otpMatch && otpMatch.length > 1) {
                        var otp = otpMatch[1];

                        $("#otpValue" + index).text(otp);
                    } else {
                        showAlert("Failed to generate OTP. Please try again.", "error");
                    }
                },
                error: function() {
                    showAlert("Failed to generate OTP. Please try again.", "error");
                }
            });
        }

        function loadEntries() {
            var entries = JSON.parse(localStorage.getItem("entries"));
            if (!Array.isArray(entries)) {
                entries = [];
            }

            $("#entriesTable").empty();

            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                var row = $("<tr></tr>");
                var nameCell = $("<td></td>").text(entry.name);
                var otpCell = $("<td></td>").append('<span id="otpValue' + i + '"></span>');
                var actionCell = $("<td></td>").html('<button class="removeBtn" onclick="removeEntry(' + i + ')">Remove</button>');

                row.append(nameCell);
                row.append(otpCell);
                row.append(actionCell);

                $("#entriesTable").append(row);

                generateOTP(entry.secret, i);
            }
        }

        function showAlert(message, type) {
            var alertDiv = $("<div></div>").addClass("alert");

            if (type === "success") {
                alertDiv.css("background-color", "#4caf50");
            } else if (type === "error") {
                alertDiv.css("background-color", "#f44336");
            }

            alertDiv.text(message);

            $("#menu").prepend(alertDiv);

            setTimeout(function() {
                alertDiv.remove();
            }, 3000);
        }
