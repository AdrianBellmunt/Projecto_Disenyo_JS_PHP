<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('page/index.html.twig', []);
    }

    #[Route('/entrenamiento', name: 'entrenamiento')]
    public function entrenamiento(): Response
    {
        return $this->render('page/entrenamiento.html.twig', []);
    }

    #[Route('/nutricion', name: 'nutricion')]
    public function nutricion(): Response
    {
        return $this->render('page/nutricion.html.twig', []);
    }

    #[Route('/ropa', name: 'ropa')]
    public function ropa(): Response
    {
        return $this->render('page/ropa.html.twig', []);
    }

    #[Route('/contacto', name: 'contacto')]
    public function contacto(): Response
    {
        return $this->render('page/contacto.html.twig', []);
    }

    #[Route('/blog', name: 'blog')]
    public function blog(): Response
    {
        return $this->render('page/blog.html.twig', []);
    }

    #[Route('/trensuperior', name: 'trensuperior')]
    public function trensuperior(): Response
    {
        return $this->render('page/trensuperior.html.twig', []);
    }
}

