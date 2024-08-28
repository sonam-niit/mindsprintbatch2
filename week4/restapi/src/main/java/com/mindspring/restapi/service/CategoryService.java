package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Category;
import com.mindspring.restapi.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo repo;

    public Category addCategory(Category category){
        return repo.save(category);
    }
    public List<Category> getAllCategories(){
        return repo.findAll();
    }
}
