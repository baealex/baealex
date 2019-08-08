package memo;

import java.sql.*;
import java.util.*;

import myutil.DBClose;
import myutil.DBOpen;

public class MemoDAO {
    public void upViewcnt(int pk) {
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();
        sql.append(" update memo  ");
        sql.append(" set viewcnt = viewcnt + 1 ");
        sql.append(" where pk = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setInt(1, pk);

            pstmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt);
        }

    }

    public boolean delete(int pk) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();
        sql.append(" delete from memo ");
        sql.append(" where pk = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setInt(1, pk);

            int cnt = pstmt.executeUpdate();
            if (cnt > 0)
                flag = true;

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt);
        }

        return flag;
    }

    public boolean update(MemoDTO dto) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();
        sql.append(" update memo ");
        sql.append(" set title = ?, ");
        sql.append(" content = ?  ");
        sql.append(" where pk = ?  ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, dto.getTitle());
            pstmt.setString(2, dto.getContent());
            pstmt.setInt(3, dto.getPK());

            int cnt = pstmt.executeUpdate();
            if (cnt > 0)
                flag = true;

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt);
        }

        return flag;
    }

    public MemoDTO read(int pk) {
        MemoDTO dto = null;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        StringBuffer sql = new StringBuffer();
        sql.append(" select pk,title,content,");
        sql.append(" to_char(wdate,'yyyy-mm-dd') wdate, ");
        sql.append(" viewcnt from memo ");
        sql.append(" where pk = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setInt(1, pk);

            rs = pstmt.executeQuery();
            if (rs.next()) {
                dto = new MemoDTO();
                dto.setPK(rs.getInt("pk"));
                dto.setTitle(rs.getString("title"));
                dto.setContent(rs.getString("content"));
                dto.setWdate(rs.getString("wdate"));
                dto.setViewcnt(rs.getInt("viewcnt"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt, rs);
        }

        return dto;
    }

    public boolean create(MemoDTO dto) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();
        sql.append(" insert into memo ");
        sql.append(" (pk, title, content, wdate) ");
        sql.append(" values(memo_seq.nextval, ");
        sql.append(" ?,?, sysdate) ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, dto.getTitle());
            pstmt.setString(2, dto.getContent());

            int cnt = pstmt.executeUpdate();

            if (cnt > 0)
                flag = true;

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt);
        }

        return flag;
    }

    public List<MemoDTO> list() {
        List<MemoDTO> list = new ArrayList<MemoDTO>();
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        StringBuffer sql = new StringBuffer();
        sql.append(" SELECT pk, title, to_char(wdate,'yyyy-mm-dd') wdate, content, ");
        sql.append(" viewcnt FROM memo ");
        sql.append(" ORDER BY pk DESC ");

        try {
            pstmt = con.prepareStatement(sql.toString());

            rs = pstmt.executeQuery();

            while (rs.next()) {
                MemoDTO dto = new MemoDTO();
                dto.setPK(rs.getInt("pk"));
                dto.setTitle(rs.getString("title"));
                dto.setContent(rs.getString("content"));
                dto.setWdate(rs.getString("wdate"));
                dto.setViewcnt(rs.getInt("viewcnt"));

                list.add(dto);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt, rs);
        }

        return list;
    }

}