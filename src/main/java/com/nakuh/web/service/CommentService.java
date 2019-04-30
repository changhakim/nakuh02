package com.nakuh.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Comment;

@Component
public interface CommentService {
	public void registComment(Comment com);
	
	public List<Comment> bringAllCommentsList();
	public List<Comment> retrieveComments();
	public Comment retrieveComment(String searchWord);
	public int countComments();
	public boolean existsComment(String searchWord);
	
	public void modifyComment(Comment com);
	public void removeComment(Comment com);
}
