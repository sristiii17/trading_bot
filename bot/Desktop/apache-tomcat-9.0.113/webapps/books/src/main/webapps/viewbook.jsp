<%@ page import="java.sql.*" %>

<%
    int id = Integer.parseInt(request.getParameter("id"));

    String url = "jdbc:mysql://localhost:3306/mybooksdb";
    String user = "root";             // your MySQL username
    String pass = "Sristi@17";    // your MySQL password

    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection con = DriverManager.getConnection(url, user, pass);

    PreparedStatement ps =
        con.prepareStatement("SELECT * FROM books WHERE id=?");
    ps.setInt(1, id);

    ResultSet rs = ps.executeQuery();
%>

<html>
<body>
<%
    if (rs.next()) {
%>
        <h1><%= rs.getString("title") %></h1>
        <p><%= rs.getString("content") %></p>
<%
    }
    con.close();
%>

<a href="index.jsp">⬅ Back</a>
</body>
</html>
