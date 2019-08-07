package myutil;

import java.sql.*;

public class DBClose {
    public static void close(Connection con, PreparedStatement pstmt) {
        try {
            if (pstmt != null) {
                pstmt.close();
            }
        } catch (Exception e) {

        }

        try {
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {

        }
    }

    public static void close(Connection con, PreparedStatement pstmt, ResultSet rs) {
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (Exception e) {
        }

        try {
            if (pstmt != null) {
                pstmt.close();

            }
        } catch (Exception e) {
        }

        try {
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {
        }
    }
}