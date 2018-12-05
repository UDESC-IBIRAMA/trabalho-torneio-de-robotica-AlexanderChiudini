package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Categoria;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import udesc.ceavi.robotica.repositorio.CategoriaRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    
    @Autowired
    private CategoriaRepositorio cat;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Categoria buscar(@PathVariable long id) {
        return cat.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Categoria> buscar() {
        return cat.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Categoria salvar(@RequestBody Categoria c) {
        System.out.println("chegou aqui Xd");
        return cat.save(c);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        cat.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Categoria atualizar(@PathVariable long id, @RequestBody Categoria ca) {
        Optional<Categoria> catSalvo = cat.findById(id);
        Categoria c = catSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(ca, c, "id");
        cat.save(c);
        return c;
    }
}
