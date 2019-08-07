package test;

import java.util.List;

import memo.MemoDAO;
import memo.MemoDTO;

public class MemoTest {

    public static void main(String[] args) {
        MemoDAO dao = new MemoDAO();
        // list(dao);
        // create(dao);
        // read(dao);
        // update(dao);
        // delete(dao);

    }

    private static void delete(MemoDAO dao) {
        if (dao.delete(27)) {
            p("삭제됨");
        } else {
            p("삭제실패");
        }

    }

    private static void update(MemoDAO dao) {
        MemoDTO dto = dao.read(11);
        dto.setTitle("제목");
        dto.setContent("본문");
        if (dao.update(dto)) {
            p("수정됨");
            dto = dao.read(11);
            p("------------");
            p(dto);
        } else {
            p("수정실패");
        }

    }

    private static void read(MemoDAO dao) {
        MemoDTO dto = dao.read(11);
        p(dto);

    }

    private static void create(MemoDAO dao) {

        MemoDTO dto = new MemoDTO();
        dto.setTitle("제목");
        dto.setContent("본문");
        if (dao.create(dto)) {
            p("생성됨");
        } else {
            p("생성실패");
        }

    }

    private static void list(MemoDAO dao) {
        List<MemoDTO> list = dao.list();
        for (int i = 0; i < list.size(); i++) {
            MemoDTO dto = list.get(i);
            p(dto);
            p("--------------");
        }

    }

    private static void p(String string) {
        System.out.println(string);

    }

    private static void p(MemoDTO dto) {
        p("번호 : " + dto.getPK());
        p("제목 : " + dto.getTitle());
        p("본문 : " + dto.getContent());
        p("날짜 : " + dto.getWdate());
        p("조회 : " + dto.getViewcnt());

    }

}